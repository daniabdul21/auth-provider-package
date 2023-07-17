/// <reference types="react" />
import { ChangePasswordType, ForgotPasswordType, ProductAuthoritiesType, VerifyUserQuestion } from "../types/auth";
import { TransactionWorkflow } from "../types/workflow";
export declare enum UserType {
    BankAdmin = "bank-admin",
    CustomerAdmin = "customer-admin",
    CustomerUser = "customer-user"
}
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
    ssoLogin: (userId: string, sessionId: string, dtTime: string, onError?: (errorMessage: string) => void) => Promise<void>;
    logout: () => Promise<void>;
    canIApprove: (workflow: TransactionWorkflow.Root) => boolean;
    menuData: any[];
    ssoQlolaLogin: (request: string) => Promise<void>;
    verifyUserQuestion: (payload: VerifyUserQuestion) => Promise<void>;
    verifyChangePasswordToken: (token: string) => Promise<void>;
    forgotPassword: (payload: ForgotPasswordType) => Promise<void>;
    login: (username: string, password: string, branchCode: string) => Promise<void>;
    checkToChangePassword: (username: string, password: string, tokenFCM: string, branchCode: string) => Promise<void>;
    passwordLoginWithCheck: (username: string, password: string, tokenFCM: string, branchCode: string) => Promise<void>;
    requestChangePassword: (payload: ChangePasswordType) => Promise<void>;
}
export interface AuthProviderProps {
    children?: React.ReactNode;
    apiUrl: string;
    cookieName?: string;
}
export declare const AuthProvider: React.FC<AuthProviderProps>;
export declare const useAuth: () => AuthContextProps;
export {};
