import customAxios from "./custom-axios";
import { ChangePasswordType, ForgotPasswordType, VerifyUserQuestion } from "../types";

const AuthService = () => {
  const crypto = require("crypto-js");
  const headersWithSignature = (signature: any) => {
    return {
      "x-signature": signature,
    };
  };
  const CreateSignature = (params: any) => {
    const secret = process.env[`NEXT_PUBLIC_SECRET_KEY_LOGIN_V2`] || "addons";
    const data = JSON.stringify(params);

    const hash = crypto.HmacSHA256(data, secret);
    return hash.toString();
  };

  const validateToken = () => {
    return customAxios.get(`/auth/me`)
    .then((response) =>{
      return response
    })
    .catch((error) => {
      return Promise.reject(error);
    })
  };

  const validateMenu = (token: string) => {
    return customAxios
      .post(`/menu/me`, { token })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Error");
        }
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  const checkToChangePasswordLogin = async (username: string, password: string, branchCode: string) => {
    try {
      const response = await customAxios.post("/auth/v2/login", {
        username,
        password,
        branchCode,
      });
      if (response.status !== 200) {
        throw new Error("Username or password not valid!");
      }
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const testingFunction = () => {
    console.log("Hallo ajah");
  };

  const requestChangePassword = async ({ ...payload }: ChangePasswordType) => {
    try {
      const prepareData = {
        branchCode: payload.branchCode,
        username: payload.username,
        tempPassword: payload.tempPassword,
        password: payload.password,
        confirmPassword: payload.confirmPassword,
        answerQuestion1: payload.answerQuestion1,
        answerQuestion2: payload.answerQuestion2,
        token: payload.tokenFCM,
      };
      const response = await customAxios.post("/auth/change-password", prepareData);
      if (response.status !== 200) {
        throw new Error("Username or password not valid!");
      }
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const forgotPassword = async ({ ...payload }: ForgotPasswordType) => {
    try {
      const prepareData = {
        ...payload,
      };
      const response = await customAxios.post("/auth/forgot-password", prepareData);
      if (response.status !== 200) {
        throw new Error("Username or password not valid!");
      }
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const verifyUserQuestion = async ({ ...payload }: VerifyUserQuestion) => {
    try {
      const prepareData = {
        ...payload,
      };
      const response = await customAxios.post("/auth/verify-question", prepareData);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const verifyChangePasswordToken = async ({ ...payload }) => {
    try {
      const prepareData = {
        ...payload,
      };
      const response = await customAxios.post("/auth/verify-change-password-token", prepareData);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const passwordLogin = async (username: string, password: string, tokenFCM: string) => {
    try {
      const response = await customAxios.post("/auth/login/password", {
        username,
        password,
        tokenFCM,
      });
      if (response.status !== 200) {
        throw new Error("Username or password not valid!");
      }
      return response;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const ssoLogin = async (userId: string, sessionId: string, dtTime: string) => {
    if (!userId || !sessionId || !dtTime) {
      throw new Error("User ID, Session ID and Datetime are required");
    }
    return await customAxios.get(`/auth/login`, {
      params: {
        USERID: encodeURIComponent(userId),
        SESSIONID: encodeURIComponent(sessionId),
        DTTIME: encodeURIComponent(dtTime),
      },
    });
  };

  const ssoLoginQlola = async (request: string) => {
    return customAxios
      .post("/auth/login/init-token", { request: request })
      .then((response) => {
        if (response.status !== 200) throw new Error(response.data?.message || "Server Error");
        return {
          data: response.data,
        };
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  const logoutSSO = async (clientName: string) => {
    return await customAxios
      .get(`sso/signout/${clientName}`)
      .then((response) => {
        if (response.status !== 200) {
          return;
        }
        return response;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  const login = async (branchCode: string, username: string, password: string) => {
    const data = { username, password, branchCode };
    const hash = CreateSignature(data);

    return await customAxios
      .post("auth/v2/login", data, {
        headers: headersWithSignature(hash),
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  const logout = async () => {
    return await customAxios.get(`/auth/logout`);
  };

  return {
    validateToken,
    validateMenu,
    passwordLogin,
    ssoLogin,
    logout,
    logoutSSO,
    checkToChangePasswordLogin,
    requestChangePassword,
    testingFunction,
    ssoLoginQlola,
    login,
    forgotPassword,
    verifyUserQuestion,
    verifyChangePasswordToken,
  };
};

export default AuthService;
