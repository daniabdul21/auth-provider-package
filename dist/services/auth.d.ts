import { ChangePasswordType, ForgotPasswordType, VerifyUserQuestion } from "../types";
declare const AuthService: () => {
    validateToken: () => Promise<import("axios").AxiosResponse<any, any>>;
    validateMenu: (token: string) => Promise<import("axios").AxiosResponse<any, any>>;
    passwordLogin: (username: string, password: string, tokenFCM: string) => Promise<import("axios").AxiosResponse<any, any>>;
    ssoLogin: (userId: string, sessionId: string, dtTime: string) => Promise<import("axios").AxiosResponse<any, any>>;
    logout: () => Promise<import("axios").AxiosResponse<any, any>>;
    logoutSSO: (clientName: string) => Promise<import("axios").AxiosResponse<any, any> | undefined>;
    checkToChangePasswordLogin: (username: string, password: string, branchCode: string) => Promise<import("axios").AxiosResponse<any, any>>;
    requestChangePassword: ({ ...payload }: ChangePasswordType) => Promise<import("axios").AxiosResponse<any, any>>;
    testingFunction: () => void;
    ssoLoginQlola: (request: string) => Promise<{
        data: any;
    }>;
    login: (branchCode: string, username: string, password: string) => Promise<import("axios").AxiosResponse<any, any>>;
    forgotPassword: ({ ...payload }: ForgotPasswordType) => Promise<import("axios").AxiosResponse<any, any>>;
    verifyUserQuestion: ({ ...payload }: VerifyUserQuestion) => Promise<import("axios").AxiosResponse<any, any>>;
    verifyChangePasswordToken: ({ ...payload }: {
        [x: string]: any;
    }) => Promise<import("axios").AxiosResponse<any, any>>;
    refreshToken: (refreshToken: string) => Promise<import("axios").AxiosResponse<any, any>>;
};
export default AuthService;
