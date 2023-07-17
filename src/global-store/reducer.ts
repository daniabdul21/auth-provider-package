import {
  GlobalStore,
  GlobalStoreAction,
  GlobalStoreActionTypeEnum,
} from "../../types";
import { Reducer } from "react";
import { SYSTEM_STORE_INITIAL_STATE } from "./initial-state";

const {
  SET_PRODUCTS,
  SET_BRICAMS_USER,
  SET_SYSTEM_CONFIG,
  CLEAN_DATA,
  PATCH_DATA,
  SET_LOADING,
  SET_ERROR,
} = GlobalStoreActionTypeEnum;

export const globalStoreReducer: Reducer<GlobalStore, GlobalStoreAction> = (
  state: GlobalStore,
  action: GlobalStoreAction = {}
): GlobalStore => {
  const { type, payload } = action;
  switch (type) {
    case PATCH_DATA:
      return {
        ...state,
        ...payload,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
        isLoading: {
          ...state.isLoading,
          products: false,
        },
      };
    case SET_BRICAMS_USER:
      return {
        ...state,
        bricamsUser: payload,
        isLoading: {
          ...state.isLoading,
          bricamsUser: false,
        },
      };
    case SET_SYSTEM_CONFIG:
      return {
        ...state,
        systemConfig: payload,
        isLoading: {
          ...state.isLoading,
          systemConfig: false,
        },
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          [payload]: true,
        },
      };
    case SET_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          [payload.key]: payload.err,
        },
        isLoading: {
          ...state.isLoading,
          [payload.key]: false,
        },
      };
    case CLEAN_DATA:
      return { ...SYSTEM_STORE_INITIAL_STATE };
    default:
      return state;
  }
};
