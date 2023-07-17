var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useRouter } from "next/router";
import AuthService from "../services/auth";
import { message } from "antd";
import { IdleTimerProvider } from "react-idle-timer";
import { createProductAuthorities } from "../utils/auth";
import { AuthorityLevelEnum, } from "../types/auth";
import { ProductTypeEnum } from "../types/product";
var FIFTEEN_MINUTES = 15 * 60 * 1000;
export var UserType;
(function (UserType) {
    UserType["BankAdmin"] = "bank-admin";
    UserType["CustomerAdmin"] = "customer-admin";
    UserType["CustomerUser"] = "customer-user";
})(UserType || (UserType = {}));
var initialProductAuthorities = createProductAuthorities();
var AUTH_INITIAL_VALUES = {
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
    guard: function () {
        throw new Error("Function not implemented.");
    },
    passwordLogin: function (_, __, ___) {
        throw new Error("Function not implemented.");
    },
    ssoLogin: function (_, __, ___) {
        throw new Error("Function not implemented.");
    },
    logout: function () {
        throw new Error("Function not implemented.");
    },
    canIApprove: function () {
        throw new Error("Function not implemented.");
    },
    menuData: [],
    verifyUserQuestion: function (_payloa) {
        throw new Error("Function not implemented.");
    },
    verifyChangePasswordToken: function (_token) {
        throw new Error("Function not implemented.");
    },
    ssoQlolaLogin: function (_) {
        throw new Error("Function not implemented.");
    },
    login: function (_, __, ___) {
        throw new Error("Function not implemented.");
    },
    forgotPassword: function (_payload) {
        throw new Error("Function not implemented.");
    },
    checkToChangePassword: function (_, __, ___, ____) {
        throw new Error("Function not implemented.");
    },
    passwordLoginWithCheck: function (_, __, ___, ____) {
        throw new Error("Function not implemented.");
    },
    requestChangePassword: function (_payload) {
        throw new Error("Function not implemented.");
    },
};
// export const getStaticProps:GetStaticProps<{}> = async () => {
//
// }
var AuthContext = createContext(AUTH_INITIAL_VALUES);
export var AuthProvider = function (_a) {
    var children = _a.children, apiUrl = _a.apiUrl;
    var router = useRouter();
    var _b = useState(function () {
        if (typeof window !== "undefined") {
            var t = localStorage.getItem("access-token");
            return t;
        }
        return null;
    }), token = _b[0], setToken = _b[1];
    var authService = useMemo(function () { return AuthService(); }, [apiUrl, token]);
    var _c = useState(new Map()), authorities = _c[0], setAuthorities = _c[1];
    var _d = useState("Guest"), username = _d[0], setUsername = _d[1];
    var _e = useState(null), userType = _e[0], setUserType = _e[1];
    var _f = useState(null), companyID = _f[0], setCompanyID = _f[1];
    var _g = useState(""), companyName = _g[0], setCompanyName = _g[1];
    var _h = useState(null), userID = _h[0], setUserID = _h[1];
    var _j = useState(null), roleID = _j[0], setRoleID = _j[1];
    var _k = useState([]), roleIDs = _k[0], setRoleIDs = _k[1];
    var _l = useState(null), holdingID = _l[0], setHoldingID = _l[1];
    var _m = useState(false), alertMenuError = _m[0], setAlertMenuError = _m[1];
    var _o = useState(false), _openModal = _o[0], setOpenModal = _o[1];
    var _p = useState([]), menus = _p[0], setMenus = _p[1];
    var _q = useState(FIFTEEN_MINUTES), isMinutes = _q[0], setIsMinutes = _q[1];
    var _r = useState(false), isLoading = _r[0], setIsLoading = _r[1];
    var _s = useState(initialProductAuthorities), productAuthorities = _s[0], setProductAuthorities = _s[1];
    var _t = useState(false), isAuthoritiesReady = _t[0], setIsAuthoritiesReady = _t[1];
    var _u = useState([]), menuData = _u[0], setMenuData = _u[1];
    var loggedIn = useMemo(function () { return !!token; }, [token]);
    var guard = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var response_1, menu, a_1, productRoles, privilegesRecords_1;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (!token) return [3 /*break*/, 3];
                    setIsAuthoritiesReady(false);
                    return [4 /*yield*/, authService.validateToken()];
                case 1:
                    response_1 = _e.sent();
                    return [4 /*yield*/, authService.validateMenu(token)];
                case 2:
                    menu = _e.sent();
                    if (menu.data.code !== 200 || !menu)
                        setAlertMenuError(true);
                    setMenus((_b = (_a = menu.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.filter(function (item) { return item.productName !== ""; }).map(function (item) { return item.productName; }));
                    setMenuData((_c = menu.data) === null || _c === void 0 ? void 0 : _c.data);
                    if (response_1.status !== 200) {
                        localStorage.removeItem("access-token");
                        localStorage.removeItem("refresh-token");
                        setToken(function () { return null; });
                        router.push("/login?logout=true");
                        return [2 /*return*/];
                    }
                    setRoleID(function () { return response_1.data.roleIDs[0]; });
                    setRoleIDs(function () { return response_1.data.roleIDs; });
                    setCompanyID(function () { var _a; return (_a = response_1.data) === null || _a === void 0 ? void 0 : _a.companyID; });
                    setCompanyName(function () { var _a; return (_a = response_1.data) === null || _a === void 0 ? void 0 : _a.companyName; });
                    setUserID(function () { var _a; return (_a = response_1.data) === null || _a === void 0 ? void 0 : _a.userID; });
                    setHoldingID(function () { var _a; return (_a = response_1.data) === null || _a === void 0 ? void 0 : _a.holdingID; });
                    setUsername(function () { var _a; return ((_a = response_1.data) === null || _a === void 0 ? void 0 : _a.username) || "Guest"; });
                    setUserType(function () { var _a; return ((_a = response_1.data) === null || _a === void 0 ? void 0 : _a.userType) || null; });
                    a_1 = new Map();
                    productRoles = ((_d = response_1.data) === null || _d === void 0 ? void 0 : _d.productRoles) || [];
                    productRoles.forEach(function (r) {
                        a_1.set(r.productName, r.authorities);
                    });
                    setAuthorities(function () { return a_1; });
                    privilegesRecords_1 = __assign({}, productAuthorities);
                    Object.entries(ProductTypeEnum).forEach(function (_a) {
                        var productKey = _a[0], productValue = _a[1];
                        var productRole = a_1.get(productValue) || [];
                        productRole = productRole.map(function (e) { return e.split(":")[0]; });
                        var productAuthority = {};
                        Object.entries(AuthorityLevelEnum).forEach(function (_a) {
                            var key = _a[0], value = _a[1];
                            productAuthority[key] = productRole.includes(value);
                        });
                        productAuthority["anyAuthority"] = productRole.length > 0;
                        productAuthority["allAuthority"] = productRole.length >= Object.entries(AuthorityLevelEnum).length;
                        privilegesRecords_1[productKey] = productAuthority;
                    });
                    setProductAuthorities(privilegesRecords_1);
                    setIsAuthoritiesReady(true);
                    return [2 /*return*/];
                case 3:
                    router.push("/login");
                    return [2 /*return*/];
            }
        });
    }); }, [token, authService]);
    var canIApprove = function (workflow) {
        var _a, _b, _c, _d, _e, _f;
        if (!(workflow === null || workflow === void 0 ? void 0 : workflow.workflow))
            return false;
        var _g = workflow.workflow, header = _g.header, currentStep = _g.currentStep, records = _g.records, _h = _g.currentRoleIDs, currentRoleIDs = _h === void 0 ? [] : _h, createdBy = _g.createdBy, participantUserIDs = _g.participantUserIDs;
        var product = header === null || header === void 0 ? void 0 : header.productName;
        if (!product)
            return false;
        var productKey = Object.keys(ProductTypeEnum).find(function (e) { return ProductTypeEnum[e] === product; });
        if (!productKey)
            return false;
        var authority = productAuthorities[productKey];
        if (!authority)
            return false;
        var flows = records === null || records === void 0 ? void 0 : records.flows[0];
        var alreadyApprove = false;
        var roleAllowed = false;
        (currentRoleIDs || []).forEach(function (rID) {
            if (roleIDs.includes("".concat(rID)))
                roleAllowed = true;
        });
        if (roleIDs.length > 0) {
            var participants = __spreadArray(__spreadArray(__spreadArray([], (((_a = flows === null || flows === void 0 ? void 0 : flows.approver) === null || _a === void 0 ? void 0 : _a.participants) ? (_b = flows === null || flows === void 0 ? void 0 : flows.approver) === null || _b === void 0 ? void 0 : _b.participants : []), true), (((_c = flows === null || flows === void 0 ? void 0 : flows.verifier) === null || _c === void 0 ? void 0 : _c.participants) ? (_d = flows === null || flows === void 0 ? void 0 : flows.verifier) === null || _d === void 0 ? void 0 : _d.participants : []), true), (((_e = flows === null || flows === void 0 ? void 0 : flows.releaser) === null || _e === void 0 ? void 0 : _e.participants) ? (_f = flows === null || flows === void 0 ? void 0 : flows.releaser) === null || _f === void 0 ? void 0 : _f.participants : []), true);
            var participant = participants.find(function (p) { return roleIDs.includes("".concat(p.roleID)) && p.step === currentStep && p.userName === username; });
            alreadyApprove = !!(participant === null || participant === void 0 ? void 0 : participant.approvedAt);
        }
        if (participantUserIDs && (participantUserIDs === null || participantUserIDs === void 0 ? void 0 : participantUserIDs.includes(userID)))
            return false;
        if (userID === createdBy.userID && currentStep !== "releaser")
            return false;
        return ((authority.approve && currentStep === "signer" && roleAllowed && !alreadyApprove) ||
            (authority.verify &&
                (currentStep === "verifier" || currentStep === "checker") &&
                roleAllowed &&
                !alreadyApprove) ||
            (authority.release && currentStep === "releaser" && roleAllowed && !alreadyApprove));
    };
    var passwordLogin = useCallback(function (username, password, tokenFCM) { return __awaiter(void 0, void 0, void 0, function () {
        var response_2, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, authService.passwordLogin(username, password, tokenFCM)];
                case 2:
                    response_2 = _a.sent();
                    setToken(function () { return response_2.data.data.accessToken; });
                    localStorage.setItem("access-token", response_2.data.data.accessToken);
                    localStorage.setItem("refresh-token", response_2.data.data.refreshToken);
                    router.push("/");
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    if (error_1 instanceof Error)
                        message.error(error_1.message);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [authService, router]);
    var onPrompt = function () {
        return;
    };
    var onIdle = function () {
        if (token !== null) {
            return logout();
        }
        return;
    };
    var onActive = function () {
        return setIsMinutes(FIFTEEN_MINUTES);
    };
    var onAction = function () {
        return setIsMinutes(FIFTEEN_MINUTES);
    };
    var ssoLogin = useCallback(function (userId, sessionId, dtTime, onError) { return __awaiter(void 0, void 0, void 0, function () {
        var response_3, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, authService.ssoLogin(userId, sessionId, dtTime)];
                case 1:
                    response_3 = _a.sent();
                    if (response_3.status !== 200) {
                        if (response_3.status === 409)
                            setOpenModal(true);
                        return [2 /*return*/];
                    }
                    setToken(function () { return response_3.data.data.accessToken; });
                    localStorage.setItem("access-token", response_3.data.data.accessToken);
                    localStorage.setItem("refresh-token", response_3.data.data.refreshToken);
                    router.push("/");
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    if (onError) {
                        onError(error_2.message || "Login failed");
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }, [authService, router]);
    var logout = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, authService.logoutSSO("CBM")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, authService.logout()];
                case 2:
                    _a.sent();
                    localStorage.removeItem("access-token");
                    localStorage.removeItem("refresh-token");
                    // setToken(() => null);
                    setMenus(function () { return []; });
                    setMenuData(function () { return []; });
                    router.push("/login?logout=true");
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    localStorage.removeItem("access-token");
                    localStorage.removeItem("refresh-token");
                    // setToken(() => null);
                    setMenus(function () { return []; });
                    setMenuData(function () { return []; });
                    router.push("/login?logout=true");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [authService, router]);
    // const checkToChangePassword = useCallback(
    //   async (username: string, password: string, tokenFCM: string, branchCode: string): Promise<void> => {
    //     setIsLoading(true);
    //     try {
    //       const checks = await authService.checkToChangePasswordLogin(username, password, branchCode);
    //       const result = checks?.data;
    //       if (result?.data?.IsRedirectToChangePassword) {
    //         router.replace(`/landing-page/change-password?branch=${branchCode}`);
    //       } else {
    //         passwordLogin(username, password, tokenFCM);
    //       }
    //     } catch (error) {
    //       if (error instanceof Error) message.error(error.message);
    //     } finally {
    //       setTimeout(() => {
    //         setIsLoading(false);
    //       }, 1000);
    //     }
    //   },
    //   [authService]
    // );
    var checkToChangePassword = function (username, password, tokenFCM, branchCode) { return __awaiter(void 0, void 0, void 0, function () {
        var checks, result, error_4;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setIsLoading(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, authService.checkToChangePasswordLogin(username, password, branchCode)];
                case 2:
                    checks = _b.sent();
                    result = checks === null || checks === void 0 ? void 0 : checks.data;
                    if ((_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.IsRedirectToChangePassword) {
                        router.replace("/landing-page/change-password?branch=".concat(branchCode));
                    }
                    else {
                        passwordLogin(username, password, tokenFCM);
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_4 = _b.sent();
                    if (error_4 instanceof Error)
                        message.error(error_4.message);
                    return [3 /*break*/, 5];
                case 4:
                    setTimeout(function () {
                        setIsLoading(false);
                    }, 1000);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // const requestChangePassword = useCallback(
    //   async ({ ...payload }: ChangePasswordType): Promise<void> => {
    //     setIsLoading(true);
    //     try {
    //       const response = await authService.requestChangePassword(payload);
    //       message.success(response.data.message)
    //
    //       router.replace(`/landing-page`)
    //     } catch (error) {
    //       if (error instanceof Error) message.error(error.message);
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   },
    //   [authService, router]
    // );
    var requestChangePassword = function (_a) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_5;
        var payload = __rest(_a, []);
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setIsLoading(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, authService.requestChangePassword(payload)];
                case 2:
                    response = _b.sent();
                    message.success(response.data.message);
                    router.replace("/landing-page");
                    return [3 /*break*/, 5];
                case 3:
                    error_5 = _b.sent();
                    if (error_5 instanceof Error)
                        message.error(error_5.message);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // const forgotPassword = useCallback(
    //   async ({ ...payload }: ForgotPasswordType): Promise<void> => {
    //     setIsLoading(true);
    //     try {
    //       const response = await authService.forgotPassword(payload);
    //       message.success(response.data.message)
    //
    //       router.replace(`/landing-page`);
    //     } catch (error) {
    //       if (error instanceof Error) {
    //         message.error('The information you have provided is incorrect, please try again.')
    //       };
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   },
    //   [authService, router]
    // );
    var forgotPassword = function (_a) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_6;
        var payload = __rest(_a, []);
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setIsLoading(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, authService.forgotPassword(payload)];
                case 2:
                    response = _b.sent();
                    message.success(response.data.message);
                    router.replace("/landing-page");
                    return [3 /*break*/, 5];
                case 3:
                    error_6 = _b.sent();
                    if (error_6 instanceof Error) {
                        message.error('The information you have provided is incorrect, please try again.');
                    }
                    ;
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // const verifyUserQuestion = useCallback(
    //   async ({ ...payload }: VerifyUserQuestion): Promise<any> => {
    //     setIsLoading(true);
    //     try {
    //       const response = await authService.verifyUserQuestion(payload);
    //       return response;
    //     } catch (error: any) {
    //       if (error.response.data.code === 404) {
    //         message.error('Data not found')
    //         return
    //       }
    //       message.error(error.response.data.message)
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   },
    //   [authService, router]
    // );
    var verifyUserQuestion = function (_a) { return __awaiter(void 0, void 0, void 0, function () {
        var response, err_1;
        var payload = __rest(_a, []);
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setIsLoading(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, authService.verifyUserQuestion(payload)];
                case 2:
                    response = _b.sent();
                    return [2 /*return*/, response];
                case 3:
                    err_1 = _b.sent();
                    if (err_1.response.data.code === 404) {
                        return [2 /*return*/, message.error("Data not found")];
                    }
                    message.error(err_1.response.data.message);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // const verifyChangePasswordToken = useCallback(
    //   async (token: string): Promise<any> => {
    //     setIsLoading(true);
    //     try {
    //       const payload = { changePasswordToken: token };
    //       const response = await authService.verifyChangePasswordToken(payload);
    //       const { isValid } = response.data;
    //       if (!isValid) {
    //         router.push('/landing-page');
    //         return
    //       }
    //       return response;
    //     } catch (error: any) {
    //       console.error(error)
    //       router.push('/landing-page');
    //
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   },
    //   [authService, router]
    // );
    var verifyChangePasswordToken = function (token) { return __awaiter(void 0, void 0, void 0, function () {
        var payload, response, isValid, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    payload = { changePasswordToken: token };
                    return [4 /*yield*/, authService.verifyChangePasswordToken(payload)];
                case 2:
                    response = _a.sent();
                    isValid = response.data.isValid;
                    if (!isValid) {
                        router.push('/landing-page');
                        return [2 /*return*/];
                    }
                    return [2 /*return*/, response];
                case 3:
                    error_7 = _a.sent();
                    console.error(error_7);
                    router.push('/landing-page');
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // const passwordLoginWithCheck = useCallback(
    //   async (username: string, password: string, tokenFCM: string, branchCode: string): Promise<void> => {
    //     setIsLoading(true);
    //     try {
    //       const response = await authService.passwordLogin(username, password, tokenFCM);
    //       const checksChangePassword = await authService.checkToChangePasswordLogin(username, password, branchCode);
    //       const resultChangePassword = checksChangePassword?.data;
    //
    //       if (resultChangePassword?.data?.IsRedirectToChangePassword) {
    //         router.replace(`/landing-page/change-password?branch=${branchCode}`);
    //       } else {
    //         setToken(() => response.data.data.accessToken);
    //
    //         localStorage.setItem("access-token", response.data.data.accessToken);
    //         localStorage.setItem("refresh-token", response.data.data.refreshToken);
    //         localStorage.setItem("locale", "id");
    //
    //         router.push("/");
    //       }
    //     } catch (error) {
    //       if (error instanceof Error) message.error(error.message);
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   },
    //   [authService, router]
    // );
    var passwordLoginWithCheck = function (username, password, tokenFCM, branchCode) { return __awaiter(void 0, void 0, void 0, function () {
        var response_4, checksChangePassword, resultChangePassword, error_8;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setIsLoading(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, authService.passwordLogin(username, password, tokenFCM)];
                case 2:
                    response_4 = _b.sent();
                    return [4 /*yield*/, authService.checkToChangePasswordLogin(username, password, branchCode)];
                case 3:
                    checksChangePassword = _b.sent();
                    resultChangePassword = checksChangePassword === null || checksChangePassword === void 0 ? void 0 : checksChangePassword.data;
                    if ((_a = resultChangePassword === null || resultChangePassword === void 0 ? void 0 : resultChangePassword.data) === null || _a === void 0 ? void 0 : _a.IsRedirectToChangePassword) {
                        router.replace("/landing-page/change-password?branch=".concat(branchCode));
                    }
                    else {
                        setToken(function () { return response_4.data.data.accessToken; });
                        localStorage.setItem("access-token", response_4.data.data.accessToken);
                        localStorage.setItem("refresh-token", response_4.data.data.refreshToken);
                        localStorage.setItem("locale", "id");
                        router.push("/");
                    }
                    return [3 /*break*/, 6];
                case 4:
                    error_8 = _b.sent();
                    if (error_8 instanceof Error)
                        message.error(error_8.message);
                    return [3 /*break*/, 6];
                case 5:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var ssoQlolaLogin = function (request) { return __awaiter(void 0, void 0, void 0, function () {
        var response_5, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, authService.ssoLoginQlola(request)];
                case 1:
                    response_5 = _a.sent();
                    setToken(function () { return response_5.data.data.accessToken; });
                    localStorage.setItem("access-token", response_5.data.data.accessToken);
                    localStorage.setItem("refresh-token", response_5.data.data.refreshToken);
                    localStorage.setItem("agent", response_5.data.agent);
                    router.push("/");
                    return [2 /*return*/];
                case 2:
                    err_2 = _a.sent();
                    return [2 /*return*/, Promise.reject(err_2)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    // const login = useCallback(
    //   async (username: string, password: string, branchCode: string): Promise<void> => {
    //     setIsLoading(true);
    //     try {
    //       const response = await authService.login(username, password, branchCode);
    //       setToken(() => response.data.data.accessToken);
    //
    //       const data = response.data.data;
    //       localStorage.setItem("access-token", response.data.data.accessToken);
    //       localStorage.setItem("refresh-token", response.data.data.refreshToken);
    //       localStorage.setItem("locale", "id");
    //
    //       if (data.isRedirectToChangePassword) {
    //         const token = data.changePasswordToken;
    //         router.push(`/landing-page/change-password?token=${token}`);
    //         return
    //       }
    //
    //       window.location.href = '/';
    //     } catch (error: any) {
    //
    //       const config: ArgsProps = {
    //         type: 'error',
    //         content: error.response.data.message,
    //         duration: 5,
    //         style: {
    //           marginLeft: '70%',
    //           fontSize: 18,
    //
    //         }
    //       };
    //       message.open(config)
    //       // message.error(error.response.data.message, 5)
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   },
    //   [authService, router]
    // );
    var login = function (username, password, branchCode) { return __awaiter(void 0, void 0, void 0, function () {
        var response_6, data, token_1, error_9, config;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, authService.login(username, password, branchCode)];
                case 2:
                    response_6 = _a.sent();
                    setToken(function () { return response_6.data.data.accessToken; });
                    data = response_6.data.data;
                    localStorage.setItem("access-token", response_6.data.data.accessToken);
                    localStorage.setItem("refresh-token", response_6.data.data.refreshToken);
                    localStorage.setItem("locale", "id");
                    if (data.isRedirectToChangePassword) {
                        token_1 = data.changePasswordToken;
                        router.push("/landing-page/change-password?token=".concat(token_1));
                        return [2 /*return*/];
                    }
                    window.location.href = '/';
                    return [3 /*break*/, 5];
                case 3:
                    error_9 = _a.sent();
                    config = {
                        type: 'error',
                        content: error_9.response.data.message,
                        duration: 5,
                        style: {
                            marginLeft: '70%',
                            fontSize: 18,
                        }
                    };
                    message.open(config);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(IdleTimerProvider, { onPrompt: onPrompt, onIdle: onIdle, onActive: onActive, onAction: onAction, timeout: isMinutes, children: _jsx(AuthContext.Provider, { value: {
                token: token,
                alertMenuError: alertMenuError,
                authorities: authorities,
                isAuthoritiesReady: isAuthoritiesReady,
                productAuthorities: productAuthorities,
                username: username,
                userType: userType,
                menus: menus,
                loggedIn: loggedIn,
                companyID: companyID,
                companyName: companyName,
                roleID: roleID,
                holdingID: holdingID,
                isLoading: isLoading,
                userID: userID,
                guard: guard,
                passwordLogin: passwordLogin,
                ssoLogin: ssoLogin,
                logout: logout,
                canIApprove: canIApprove,
                roleIDs: roleIDs,
                menuData: menuData,
                ssoQlolaLogin: ssoQlolaLogin,
                login: login,
                forgotPassword: forgotPassword,
                verifyUserQuestion: verifyUserQuestion,
                verifyChangePasswordToken: verifyChangePasswordToken,
                checkToChangePassword: checkToChangePassword,
                passwordLoginWithCheck: passwordLoginWithCheck,
                requestChangePassword: requestChangePassword
            }, children: children }) }));
};
export var useAuth = function () { return useContext(AuthContext); };
//# sourceMappingURL=auth.js.map