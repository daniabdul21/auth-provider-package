import { GlobalStore } from "../../types";

export const SYSTEM_STORE_INITIAL_STATE: GlobalStore = {
  products: [],
  bricamsUser: {},
  systemConfig: [],
  errors: {},
  isLoading: {
    products: false,
    bricamsUser: false,
    systemConfig: false,
  }
};
