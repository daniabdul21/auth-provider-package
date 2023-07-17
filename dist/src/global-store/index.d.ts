import { GlobalStoreAction } from "../../types";
export declare const GlobalStoreProvider: ({ children }: any) => import("react/jsx-runtime").JSX.Element;
export declare const useGlobalStore: () => {
    dispatch: (_state: GlobalStoreAction) => void;
    products: any[];
    systemConfig: any[];
    bricamsUser: any;
    errors: Partial<Record<keyof import("../../types").GlobalStore, any>>;
    isLoading: Record<"products" | "systemConfig" | "bricamsUser", boolean>;
};
