export interface GlobalStore {
    products: any[];
    systemConfig: any[];
    bricamsUser: any;
    errors: Partial<Record<keyof GlobalStore, any>>;
    isLoading: Record<keyof Omit<GlobalStore, "errors" | "isLoading">, boolean>;
}
export declare enum GlobalStoreActionTypeEnum {
    SET_PRODUCTS = "SET_PRODUCTS",
    SET_BRICAMS_USER = "SET_BRICAMS_USER",
    SET_SYSTEM_CONFIG = "SET_SYSTEM_CONFIG",
    SET_LOADING = "SET_LOADING",
    SET_ERROR = "SET_ERROR",
    PATCH_DATA = "PATCH_DATA",
    CLEAN_DATA = "CLEAN_DATA"
}
export interface GlobalStoreAction {
    type?: GlobalStoreActionTypeEnum;
    payload?: any;
}
