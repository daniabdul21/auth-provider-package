import { ProductTypeEnum } from "./product";
export type ChangePasswordType = {
    branchCode?: string;
    username?: string;
    tempPassword?: string;
    password?: string;
    confirmPassword?: string;
    answerQuestion1?: string;
    answerQuestion2?: string;
    tokenFCM?: string;
};
export type ForgotPasswordType = {
    branchCode: string;
    username: string;
    emailAddress: string;
    answerQuestion1: string;
    answerQuestion2: string;
    type?: string;
};
export type VerifyUserQuestion = {
    branchCode: string;
    username: string;
    emailAddress: string;
    type?: string;
};
export declare enum AuthorityLevelEnum {
    batch = "batch",
    uploadFile = "upload_file",
    template = "template",
    modify = "modify",
    delete = "delete",
    verify = "verify",
    approve = "approve",
    release = "release",
    downloadReport = "download_report",
    viewOnlineActivity = "view_online_activity",
    dummyauthoritylevel = "dummyauthoritylevel",
    dataEntry = "data_entry",
    transferOverview = "transfer_overview"
}
export type ProductAuthorityType = Record<keyof typeof AuthorityLevelEnum | "anyAuthority" | "allAuthority", boolean>;
export type ProductAuthoritiesType = Record<keyof typeof ProductTypeEnum, ProductAuthorityType>;
