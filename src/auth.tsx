/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, useCallback, useContext, useMemo, useState, SetStateAction } from "react";

import { useRouter } from "next/router";
import {AuthService} from "../services";
import { message } from "antd";
import { IdleTimerProvider } from "react-idle-timer";
import { createProductAuthorities } from "../utils/auth";
import {
  AuthorityLevelEnum,
  ChangePasswordType,
  ForgotPasswordType,
  ProductAuthoritiesType,
  ProductAuthorityType,
  VerifyUserQuestion,
  ProductTypeEnum,
  TransactionWorkflow,
  MultipaymentAuthorityEnum,
  TaskStatus,
  StepType
} from "../types";
import { ArgsProps } from "antd/lib/message";
import { map, snakeCase, mergeWith, toUpper, get, concat, difference, filter, find, isEmpty } from "lodash";

const FIFTEEN_MINUTES = 15 * 60 * 1000;

export enum UserType {
  BankAdmin = "bank-admin",
  CustomerAdmin = "customer-admin",
  CustomerUser = "customer-user",
}

const initialProductAuthorities = createProductAuthorities();

interface AuthContextProps {
  token: string | null;
  authorities: Map<string, string[]>;
  productAuthorities: ProductAuthoritiesType;
  isAuthoritiesReady: boolean;
  username: string;
  userType: string | null;
  menus: string[];
  alertMenuError: boolean;
  loggedIn: boolean;
  companyID: string | null;
  companyName: string;
  userID: string | null;
  roleID: string | null;
  roleIDs: string[] | null;
  holdingID: string | null;
  isLoading: boolean | null;
  guard: () => void;
  passwordLogin: (username: string, password: string, tokenFCM: string) => Promise<void>;
  ssoLogin: (
    userId: string,
    sessionId: string,
    dtTime: string,
    onError?: (errorMessage: string) => void
  ) => Promise<void>;
  logout: (type?:string) => Promise<void>;
  canIApprove: (workflow: TransactionWorkflow.Root, status?:TaskStatus) => boolean;
  canIDelete: (product: string, status: TaskStatus) => boolean;
  canIEdit: (workflow: TransactionWorkflow.Root, product : string, status: TaskStatus) => boolean;
  menuData: any[];
  ssoQlolaLogin: (
    request: string
  ) => Promise<void>;
  verifyUserQuestion: (payload: VerifyUserQuestion) => Promise<void>;
  verifyChangePasswordToken: (token: string) => Promise<void>;
  forgotPassword: (payload: ForgotPasswordType) => Promise<void>;
  login: (username: string, password: string, branchCode: string, type?:string) => Promise<void>;
  checkToChangePassword: (username: string, password: string, tokenFCM: string, branchCode: string) => Promise<void>;
  passwordLoginWithCheck: (username: string, password: string, tokenFCM: string, branchCode: string) => Promise<void>;
  requestChangePassword: (payload: ChangePasswordType) => Promise<void>;
  action : any;
  onLeaveAction : any;
  setOnLeaveAction : any;
  countryCode:string;
  setToken: (value: (((prevState: (string | null)) => (string | null)) | string | null)) => void;
  setIsLoading:  (value: (((prevState: boolean) => boolean) | boolean)) => void;
  companyCode : string;
  region : string;
}

const AUTH_INITIAL_VALUES: AuthContextProps = {
  token: null,
  authorities: new Map(),
  productAuthorities: initialProductAuthorities,
  isAuthoritiesReady: false,
  username: "Guest",
  userType: null,
  companyID: null,
  alertMenuError: false,
  companyName: "",
  userID: null,
  roleID: null,
  roleIDs: null,
  holdingID: null,
  isLoading: false,
  menus: [],
  loggedIn: false,
  guard: function (): void {
    throw new Error("Function not implemented.");
  },
  passwordLogin: function (_: string, __: string, ___: string): Promise<void> {
    throw new Error("Function not implemented.");
  },
  ssoLogin: function (_: string, __: string, ___: string): Promise<void> {
    throw new Error("Function not implemented.");
  },
  logout: function (_:string): Promise<void> {
    throw new Error("Function not implemented.");
  },
  canIApprove: function (_workflow : TransactionWorkflow.Root, _status?:TaskStatus): boolean {
    throw new Error("Function not implemented.");
  },
  menuData: [],
  verifyUserQuestion: function (_payloa: VerifyUserQuestion): Promise<void> {
    throw new Error("Function not implemented.");
  },
  verifyChangePasswordToken: function (_token: string): Promise<void> {
    throw new Error("Function not implemented.");
  },
  ssoQlolaLogin: function (_: string): Promise<void> {
    throw new Error("Function not implemented.");
  },
  login: function (_: string, __: string, ___: string, ____:string): Promise<void> {
    throw new Error("Function not implemented.");
  },
  forgotPassword: function (_payload: ForgotPasswordType): Promise<void> {
    throw new Error("Function not implemented.");
  },
  checkToChangePassword: function (_: string, __: string, ___: string, ____: string): Promise<void> {
    throw new Error("Function not implemented.");
  },
  passwordLoginWithCheck: function (_: string, __: string, ___: string, ____: string): Promise<void> {
    throw new Error("Function not implemented.");
  },
  requestChangePassword: function (_payload: ChangePasswordType): Promise<void> {
    throw new Error("Function not implemented.");
  },
  canIDelete: function (_product: string, _status: TaskStatus): boolean {
    throw new Error("Function not implemented.");
  },
  canIEdit: function (_workflow: TransactionWorkflow.Root, _product:string, _status: TaskStatus): boolean {
    throw new Error("Function not implemented.");
  },
  setIsLoading: function (_payload: SetStateAction<boolean>): Promise<void> {
    throw new Error("Function not implemented.");
  },
  setToken: function (_payload: SetStateAction<string | null>): Promise<void> {
    throw new Error("Function not implemented.");
  },
  action : null,
  onLeaveAction : null,
  setOnLeaveAction : null,
  countryCode : "",
  companyCode : "",
  region : ""
};

// export const getStaticProps:GetStaticProps<{}> = async () => {
//
// }

const AuthContext = createContext(AUTH_INITIAL_VALUES);

export interface AuthProviderProps {
  children?: React.ReactNode;
  apiUrl: string;
  cookieName?: string;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children, apiUrl }) => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      const t = localStorage.getItem("access-token");
      return t;
    }
    return null;
  });
  const authService = useMemo(() => AuthService(), [apiUrl, token]);
  const [authorities, setAuthorities] = useState<Map<string, string[]>>(new Map());
  const [username, setUsername] = useState<string>("Guest");
  const [userType, setUserType] = useState<string | null>(null);
  const [companyID, setCompanyID] = useState<string | null>(null);
  const [companyName, setCompanyName] = useState("");
  const [userID, setUserID] = useState<string | null>(null);
  const [roleID, setRoleID] = useState<string | null>(null);
  const [roleIDs, setRoleIDs] = useState<string[]>([]);
  const [holdingID, setHoldingID] = useState<string | null>(null);
  const [alertMenuError, setAlertMenuError] = useState<boolean>(false);
  const [_openModal, setOpenModal] = useState<boolean>(false);
  const [menus, setMenus] = useState<string[]>([]);
  const [isMinutes, setIsMinutes] = useState<number>(FIFTEEN_MINUTES);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productAuthorities, setProductAuthorities] = useState<ProductAuthoritiesType>(initialProductAuthorities);
  const [isAuthoritiesReady, setIsAuthoritiesReady] = useState(false);
  const [menuData, setMenuData] = useState<any>([]);
  const [action, _setAction] = useState<any>({});
  const [onLeaveAction, setOnLeaveAction] = useState<any>({});
  const [countryCode, setCountryCode] = useState<string>("");
  const [companyCode, setCompanyCode] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const loggedIn = useMemo(() => !!token, [token]);

  const guard = useCallback(async () => {
    if (token) {
      setIsAuthoritiesReady(false);
      let response:any;
      try {
        response = await authService.validateToken();
      }
      catch (error:any){
        const agent = typeof window !== "undefined" && localStorage.getItem("agent");
        if(agent === "qlola" && ![200].includes(error?.response?.data?.code || error?.response?.status)){
          localStorage.removeItem("access-token");
          localStorage.removeItem("refresh-token");

          setToken(() => null);
          return window.close();
        }
        console.log({ error });
        response = error
      }
      const menu = await authService.validateMenu(token);

      if (menu.data.code !== 200 || !menu) setAlertMenuError(true);

      const newMenuData = get(menu, 'data.data', [])
      const newMenus = newMenuData.filter((item: any) => item.productName !== "").map((item: any) => item.productName)
      setMenus(newMenus);
      setMenuData(newMenuData);

      if (response.status !== 200) {
        localStorage.removeItem("access-token");
        localStorage.removeItem("refresh-token");

        setToken(() => null);

        router.push("/main-page?logout=true");

        return;
      }

      setRoleID(() => response.data.roleIDs[0]);
      setRoleIDs(() => response.data.roleIDs);
      setCompanyID(() => response.data?.companyID);
      setCompanyName(() => response.data?.companyName);
      setUserID(() => response.data?.userID);
      setHoldingID(() => response.data?.holdingID);
      setUsername(() => response.data?.username || "Guest");
      setUserType(() => response.data?.userType || null);
      setCountryCode(() => response.data.countryCode);
      setCompanyCode(() => response?.data?.companyCode || "");
      setRegion(() => response.data.region || "");

      const a = new Map<string, Array<string>>();
      const productRoles = response.data?.productRoles || [];

      productRoles.forEach((r: any) => {
        a.set(r.productName, r.authorities);
      });

      setAuthorities(() => a);

      // Generate product authority
      const privilegesRecords = { ...productAuthorities } as any;

      // use dynamic product roles! do not use hardcode!
      const productTypeEnumValuesFromProductRoles = Array.from(a.keys())
      const productTypeEnumValuesFromHardcode = Array.from(Object.values(ProductTypeEnum))
      const remainingProductTypeEnum = difference(productTypeEnumValuesFromProductRoles, productTypeEnumValuesFromHardcode)

      const productTypeEnumKeyFromHardcode = Object.entries(ProductTypeEnum) // from hardcode
      const productTypeEnumKeyFromProductRoles = map(remainingProductTypeEnum, (item) => [toUpper(snakeCase(item)), item]) // from product roles that not define by hardcode
      const allProductTypeEnum = concat(productTypeEnumKeyFromHardcode, productTypeEnumKeyFromProductRoles)

      // FIXME: delete this logic beacuse expose all product, need to get from variable productRoles / a!
      allProductTypeEnum.forEach(([productKey, productValue]) => {
        let productRole = a.get(productValue) || [];
        productRole = productRole.map((e) => e.split(":")[0]);

        const productAuthority: any = {};
        Object.entries(AuthorityLevelEnum).forEach(([key, value]) => {
          productAuthority[key] = productRole.includes(value);
        });

        productAuthority["anyAuthority"] = productRole.length > 0;
        productAuthority["allAuthority"] = productRole.length >= Object.entries(AuthorityLevelEnum).length;

        privilegesRecords[productKey] = productAuthority as ProductAuthorityType;
      });
      // Combine Authority All Product Multipayment
      if(!isEmpty(newMenuData.find((item:any)=> item.productName === MultipaymentAuthorityEnum['create']))){
        const menuDataMultipaymentCreate = find(
          newMenuData,
          (item:any) => item.productName === MultipaymentAuthorityEnum['create']
        )
        const menuDataMultipayment = filter(
          newMenuData,
          (item:any) => item.parentID === menuDataMultipaymentCreate.menuID
        )
        const multipaymentProducts = map(menuDataMultipayment, 'name')
        map(multipaymentProducts, item => {
          privilegesRecords['MULTIPAYMENT'] = mergeWith(
            privilegesRecords['MULTIPAYMENT'],
            privilegesRecords[toUpper(snakeCase(item))],
  (objValue, srcValue) => objValue || srcValue
          )
        })
      }

      setProductAuthorities(privilegesRecords);
      setIsAuthoritiesReady(true);

      return;
    }

    router.push("/main-page");
  }, [token, authService]);

  const canIApprove = (workflow: TransactionWorkflow.Root, status?: TaskStatus) => {
    if (!workflow?.workflow) return false;

    const { header, currentStep, records, currentRoleIDs = [], createdBy, participantUserIDs } = workflow.workflow;

    const product = header?.productName as unknown as ProductTypeEnum;
    if (!product) return false;

    const productKey = toUpper(snakeCase(product));
    if (!productKey) return false;

    // @ts-ignore
    const authority = productAuthorities[productKey];
    if (!authority) return false;

    const approve = get(authority, "approve");
    const release = get(authority, "release");
    const verify = get(authority, "verify");

    const flows = records?.flows[0];

    let alreadyApprove = false;
    let roleAllowed = false;

    (currentRoleIDs || []).forEach((rID: string) => {
      if (roleIDs.includes(`${rID}`)) roleAllowed = true;
    });

    if (roleIDs.length > 0) {
      const participants = [
        ...(flows?.approver?.participants ? flows?.approver?.participants : []),
        ...(flows?.verifier?.participants ? flows?.verifier?.participants : []),
        ...(flows?.releaser?.participants ? flows?.releaser?.participants : []),
      ];

      const participant = participants.find(
        (p) => roleIDs.includes(`${p.roleID}`) && p.step === currentStep && p.userName === username
      );

      alreadyApprove = !!participant?.approvedAt;
    }

    if (participantUserIDs && participantUserIDs?.includes(userID as string)) return false;

    if (userID === createdBy.userID && currentStep !== "releaser") return false;

    const isCanIApprove =
      (approve && currentStep === StepType.Signer && roleAllowed && !alreadyApprove) ||
      (verify &&
        (currentStep === StepType.Verifier || currentStep === StepType.Checker) &&
        roleAllowed &&
        !alreadyApprove) ||
      (release && currentStep === StepType.Releaser && roleAllowed && !alreadyApprove);

    if (status) {
      return isCanIApprove && status === TaskStatus.Pending;
    }

    return isCanIApprove;
  };

  const canIDelete = (product: string, status: TaskStatus) => {
    const productKey = toUpper(snakeCase(product));
    if (!productKey) return false;

    // @ts-ignorex
    const authority = productAuthorities[productKey];
    if (!authority) return false;

    return status === TaskStatus.Draft && get(authority, "delete");
  };

  const canIEdit = (workflow: TransactionWorkflow.Root, product: string, status: TaskStatus) => {
    let newProduct = product;

    if (status === TaskStatus.Returned) {
      if (!workflow?.workflow) return false;

      const { header } = workflow.workflow;

      newProduct = header?.productName as unknown as ProductTypeEnum;
    }
    if (!newProduct) return false;

    const productKey = toUpper(snakeCase(product));
    if (!productKey) return false;

    // @ts-ignore
    const authority = productAuthorities[productKey];
    if (!authority) return false;

    const modify = get(authority, "modify");

    return (status === TaskStatus.Draft || status === TaskStatus.Returned) && modify;
  };

  const passwordLogin = useCallback(
    async (username: string, password: string, tokenFCM: string): Promise<void> => {
      setIsLoading(true);
      try {
        const response = await authService.passwordLogin(username, password, tokenFCM);

        setToken(() => response.data.data.accessToken);

        localStorage.setItem("access-token", response.data.data.accessToken);
        localStorage.setItem("refresh-token", response.data.data.refreshToken);

        router.push("/");
      } catch (error) {
        if (error instanceof Error) message.error(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [authService, router]
  );

  const onPrompt = () => {
    return;
  };

  const onIdle = () => {
    if (token !== null) {
      return logout();
    }

    return;
  };

  const onActive = () => {
    return setIsMinutes(FIFTEEN_MINUTES);
  };

  const onAction = () => {
    // setAction(action);
    return setIsMinutes(FIFTEEN_MINUTES);
  };

  const ssoLogin = useCallback(
    async (
      userId: string,
      sessionId: string,
      dtTime: string,
      onError?: (errorMessage: string) => void
    ): Promise<void> => {
      try {
        const response = await authService.ssoLogin(userId, sessionId, dtTime);

        if (response.status !== 200) {
          if (response.status === 409) setOpenModal(true);
          return;
        }

        setToken(() => response.data.data.accessToken);

        localStorage.setItem("access-token", response.data.data.accessToken);
        localStorage.setItem("refresh-token", response.data.data.refreshToken);

        router.push("/");
      } catch (error: any) {
        if (onError) {
          onError(error.message || "Login failed");
        }
      }
    },
    [authService, router]
  );

  const logout = useCallback(async (path = "/main-page?logout=true") => {
    try {
      await authService.logoutSSO("CBM");
    } catch (error) {
      // Handle errors from logoutSSO if needed
    }

    try {
      await authService.logout();
    } catch (error) {
      // Handle errors from logout if needed
    } finally {
      localStorage.removeItem("access-token");
      localStorage.removeItem("refresh-token");
      document.cookie = "loggedIn=true; max-age=0";
      document.cookie = "accessToken=; max-age=0";
      sessionStorage.clear();

      setToken(() => null);
      setMenus(() => []);
      setMenuData(() => []);

      router.push(path);
    }
  }, [authService, router]);

  const checkToChangePassword = async (username: string, password: string, tokenFCM: string, branchCode: string): Promise<void> => {
    setIsLoading(true);
    try {
      const checks = await authService.checkToChangePasswordLogin(username, password, branchCode);
      const result = checks?.data;
      if (result?.data?.IsRedirectToChangePassword) {
        router.replace(`/main-page/change-password?branch=${branchCode}`);
      } else {
        passwordLogin(username, password, tokenFCM);
      }
    } catch (error) {
      if (error instanceof Error) message.error(error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }

  const requestChangePassword = useCallback(
    async ({ ...payload }: ChangePasswordType): Promise<any> => {
      setIsLoading(true);
      try {
        const response = await authService.requestChangePassword(payload);
        if(payload.type !== "new-login"){
          message.success(response.data.message)
          router.replace(`/main-page`)
        }
        return response;
      } catch (error) {
        if (error instanceof Error && payload.type !== "new-login") message.error(error.message);
        return Promise.reject(error)
      } finally {
        setIsLoading(false);
      }
    },
    [authService, router]
  );

  const forgotPassword = async ({ ...payload }: ForgotPasswordType): Promise<any> => {
    setIsLoading(true);
    try {
      const response = await authService.forgotPassword(payload);
      if(payload.type === "new-login"){
        return response;
      }
      message.success(response.data.message)
      return router.replace(`/main-page`);
    } catch (error) {
      if(payload.type === "new-login"){
        return Promise.reject(error);
      }
      if (error instanceof Error) {
        message.error('The information you have provided is incorrect, please try again.')
      };
    } finally {
      setIsLoading(false);
    }
  }

  const verifyUserQuestion = async ({ ...payload }: VerifyUserQuestion): Promise<any> => {
    setIsLoading(true);
    try {
      const response = await authService.verifyUserQuestion(payload);
      return response;
    } catch (err: any) {
      if(payload.type === "new-login"){
        return Promise.reject(err);
      }
      if (err.response.data.code === 404) {
        return message.error("Data not found")
      }
      message.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  const verifyChangePasswordToken = useCallback(
    async (token: string): Promise<any> => {
      setIsLoading(true);
      try {
        const payload = { changePasswordToken: token };
        const response = await authService.verifyChangePasswordToken(payload);
        const { isValid } = response.data;
        if (!isValid) {
          router.push('/main-page');
          return
        }
        return response;
      } catch (error: any) {
        message.error(error.response.data.message);
        router.push('/main-page');
      } finally {
        setIsLoading(false);
      }
    },
    [authService, router]
  )

  const passwordLoginWithCheck = async (username: string, password: string, tokenFCM: string, branchCode: string): Promise<any> => {
    setIsLoading(true);
    try {
      const response = await authService.passwordLogin(username, password, tokenFCM);
      const checksChangePassword = await authService.checkToChangePasswordLogin(username, password, branchCode);
      const resultChangePassword = checksChangePassword?.data;

      if (resultChangePassword?.data?.IsRedirectToChangePassword) {
        router.replace(`/main-page/change-password?branch=${branchCode}`);
      } else {
        setToken(() => response.data.data.accessToken);

        localStorage.setItem("access-token", response.data.data.accessToken);
        localStorage.setItem("refresh-token", response.data.data.refreshToken);
        localStorage.setItem("locale", "id");

        router.push("/");
      }
    } catch (error) {
      if (error instanceof Error) message.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const ssoQlolaLogin = async (request: string) => {
    try {
      const response = await authService.ssoLoginQlola(request);
      setToken(() => response.data.data.accessToken);

      localStorage.setItem("access-token", response.data.data.accessToken);
      localStorage.setItem("refresh-token", response.data.data.refreshToken);
      localStorage.setItem("agent", response.data.agent);

      router.push("/");
      return;
    } catch (err: any) {
      return Promise.reject(err);
    }
  }

  const login = async (username: string, password: string, branchCode: string, type?:string): Promise<any> => {
    setIsLoading(true);
    try {
      const response = await authService.login(username, password, branchCode);
      setToken(() => response.data.data.accessToken);
      // setCookie(null, "access-token", response.data.data.accessToken);
      document.cookie = "loggedIn=true";

      const data = response.data.data;
      document.cookie = `accessToken=;`;
      localStorage.setItem("access-token", response.data.data.accessToken);
      localStorage.setItem("refresh-token", response.data.data.refreshToken);

      if (data.isRedirectToChangePassword) {
        const token = data.changePasswordToken;
        router.push(`/main-page/change-password?token=${token}`);
        return
      }

      if(type === "new-login"){
        return response;
      }

      router.push("/");
      return
    } catch (error: any) {
      if(type === "new-login"){
        return Promise.reject(error);
      }

      const config: ArgsProps = {
        type: 'error',
        content: error.response.data.message,
        duration: 5,
        style: {
          marginLeft: '70%',
          fontSize: 18,

        }
      };
      message.open(config)
      // message.error(error.response.data.message, 5)
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <IdleTimerProvider {...{ onPrompt, onIdle, onActive, onAction, timeout: isMinutes }}>
      <AuthContext.Provider
        value={{
          token,
          alertMenuError,
          authorities,
          isAuthoritiesReady,
          productAuthorities,
          username,
          userType,
          menus,
          loggedIn,
          companyID,
          companyName,
          roleID,
          holdingID,
          isLoading,
          userID,
          guard,
          passwordLogin,
          ssoLogin,
          logout,
          canIApprove,
          roleIDs,
          menuData,
          ssoQlolaLogin,
          login,
          forgotPassword,
          verifyUserQuestion,
          verifyChangePasswordToken,
          checkToChangePassword,
          passwordLoginWithCheck,
          requestChangePassword,
          canIDelete,
          canIEdit,
          action,
          onLeaveAction,
          setOnLeaveAction,
          countryCode,
          setIsLoading,
          setToken,
          companyCode,
          region
        }}
      >
        {children}
      </AuthContext.Provider>
    </IdleTimerProvider>
  );
};

export const useAuth = () => useContext(AuthContext);
