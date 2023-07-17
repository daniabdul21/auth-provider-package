import { createContext, useContext, useEffect, useReducer } from "react";
import {useAuth} from "../auth";
import { SYSTEM_STORE_INITIAL_STATE } from "./initial-state";
// import {  } from "./loaders";
import {
  ProductService,
  SystemService,
  UserService,
} from "../../services";
import { globalStoreReducer } from "./reducer";
import {
  GlobalStoreAction,
  GlobalStoreActionTypeEnum,
} from "../../types";

const {
  SET_PRODUCTS,
  SET_BRICAMS_USER,
  SET_SYSTEM_CONFIG,
  SET_ERROR,
  SET_LOADING,
} = GlobalStoreActionTypeEnum;

const GlobalStoreContext = createContext({
  ...SYSTEM_STORE_INITIAL_STATE,
  dispatch: (_state: GlobalStoreAction) => { },
});

export const GlobalStoreProvider = ({ children }: any) => {
  const [store, dispatch] = useReducer(
    globalStoreReducer,
    SYSTEM_STORE_INITIAL_STATE
  );
  const baseUrl = `${process.env["NEXT_PUBLIC_API_URL"]}`;
  const { token, username } = useAuth();
  const { getDataSystemAll } = SystemService(baseUrl, token);
  const { getProducts } = ProductService(baseUrl, token);
  const { getUsersBricamsDetail } = UserService(baseUrl, token);

  const loadSystemConfig = async () => {
    dispatch({ type: SET_LOADING, payload: "systemConfig" });
    try {
      const res = await getDataSystemAll();
      dispatch({
        type: SET_SYSTEM_CONFIG,
        payload: res,
      });
    } catch (err: any) {
      dispatch({
        type: SET_ERROR,
        payload: {
          key: "systemConfig",
          err: err
        }
      })
    }
  };

  const loadProducts = async () => {
    dispatch({ type: SET_LOADING, payload: "products" });
    try {
      const res = await getProducts();
      dispatch({
        type: SET_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: {
          key: "products",
          err: err
        }
      })
    }
  };

  const loadBricamsUser = async () => {
    dispatch({ type: SET_LOADING, payload: "bricamsUser" });
    try {
      const res = await getUsersBricamsDetail(username);
      dispatch({
        type: SET_BRICAMS_USER,
        payload: res,
      });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: {
          key: "bricamsUser",
          err: err
        }
      })
    }
  };

  useEffect(() => {
    if (token) {
      loadSystemConfig();
      loadProducts();
    }
  }, [!!token]);

  useEffect(() => {
    if (!!token && username !== "Guest" && !!username) {
      loadBricamsUser();
    }
  }, [!!token, username]);

  return (
    <GlobalStoreContext.Provider value={{ ...store, dispatch }}>
      {children}
    </GlobalStoreContext.Provider>
  );
};

export const useGlobalStore = () => useContext(GlobalStoreContext);
