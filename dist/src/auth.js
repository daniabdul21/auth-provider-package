"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = exports.AuthProvider = exports.UserType = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-explicit-any */
var react_1 = require("react");
var router_1 = require("next/router");
var services_1 = require("../services");
var antd_1 = require("antd");
var react_idle_timer_1 = require("react-idle-timer");
var auth_1 = require("../utils/auth");
var types_1 = require("../types");
var lodash_1 = require("lodash");
var FIFTEEN_MINUTES = 15 * 60 * 1000;
var UserType;
(function (UserType) {
    UserType["BankAdmin"] = "bank-admin";
    UserType["CustomerAdmin"] = "customer-admin";
    UserType["CustomerUser"] = "customer-user";
})(UserType || (exports.UserType = UserType = {}));
var initialProductAuthorities = (0, auth_1.createProductAuthorities)();
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
    logout: function (_) {
        throw new Error("Function not implemented.");
    },
    canIApprove: function (_workflow, _status) {
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
    login: function (_, __, ___, ____) {
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
    canIDelete: function (_product, _status) {
        throw new Error("Function not implemented.");
    },
    canIEdit: function (_workflow, _product, _status) {
        throw new Error("Function not implemented.");
    },
    action: null,
    onLeaveAction: null,
    setOnLeaveAction: null,
    countryCode: ""
};
// export const getStaticProps:GetStaticProps<{}> = async () => {
//
// }
var AuthContext = (0, react_1.createContext)(AUTH_INITIAL_VALUES);
var AuthProvider = function (_a) {
    var children = _a.children, apiUrl = _a.apiUrl;
    var router = (0, router_1.useRouter)();
    var _b = (0, react_1.useState)(function () {
        if (typeof window !== "undefined") {
            var t = localStorage.getItem("access-token");
            return t;
        }
        return null;
    }), token = _b[0], setToken = _b[1];
    var authService = (0, react_1.useMemo)(function () { return (0, services_1.AuthService)(); }, [apiUrl, token]);
    var _c = (0, react_1.useState)(new Map()), authorities = _c[0], setAuthorities = _c[1];
    var _d = (0, react_1.useState)("Guest"), username = _d[0], setUsername = _d[1];
    var _e = (0, react_1.useState)(null), userType = _e[0], setUserType = _e[1];
    var _f = (0, react_1.useState)(null), companyID = _f[0], setCompanyID = _f[1];
    var _g = (0, react_1.useState)(""), companyName = _g[0], setCompanyName = _g[1];
    var _h = (0, react_1.useState)(null), userID = _h[0], setUserID = _h[1];
    var _j = (0, react_1.useState)(null), roleID = _j[0], setRoleID = _j[1];
    var _k = (0, react_1.useState)([]), roleIDs = _k[0], setRoleIDs = _k[1];
    var _l = (0, react_1.useState)(null), holdingID = _l[0], setHoldingID = _l[1];
    var _m = (0, react_1.useState)(false), alertMenuError = _m[0], setAlertMenuError = _m[1];
    var _o = (0, react_1.useState)(false), _openModal = _o[0], setOpenModal = _o[1];
    var _p = (0, react_1.useState)([]), menus = _p[0], setMenus = _p[1];
    var _q = (0, react_1.useState)(FIFTEEN_MINUTES), isMinutes = _q[0], setIsMinutes = _q[1];
    var _r = (0, react_1.useState)(false), isLoading = _r[0], setIsLoading = _r[1];
    var _s = (0, react_1.useState)(initialProductAuthorities), productAuthorities = _s[0], setProductAuthorities = _s[1];
    var _t = (0, react_1.useState)(false), isAuthoritiesReady = _t[0], setIsAuthoritiesReady = _t[1];
    var _u = (0, react_1.useState)([]), menuData = _u[0], setMenuData = _u[1];
    var _v = (0, react_1.useState)({}), action = _v[0], _setAction = _v[1];
    var _w = (0, react_1.useState)({}), onLeaveAction = _w[0], setOnLeaveAction = _w[1];
    var _x = (0, react_1.useState)(""), countryCode = _x[0], setCountryCode = _x[1];
    var loggedIn = (0, react_1.useMemo)(function () { return !!token; }, [token]);
    var guard = (0, react_1.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var response_1, error_1, agent, menu, newMenuData, newMenus, a_1, productRoles, privilegesRecords_1, productTypeEnumValuesFromProductRoles, productTypeEnumValuesFromHardcode, remainingProductTypeEnum, productTypeEnumKeyFromHardcode, productTypeEnumKeyFromProductRoles, allProductTypeEnum, menuDataMultipaymentCreate_1, menuDataMultipayment, multipaymentProducts;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (!token) return [3 /*break*/, 6];
                    setIsAuthoritiesReady(false);
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, authService.validateToken()];
                case 2:
                    response_1 = _e.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _e.sent();
                    agent = typeof window !== "undefined" && localStorage.getItem("agent");
                    if (agent === "qlola" && ![200].includes(((_b = (_a = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.code) || ((_c = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _c === void 0 ? void 0 : _c.status))) {
                        localStorage.removeItem("access-token");
                        localStorage.removeItem("refresh-token");
                        setToken(function () { return null; });
                        return [2 /*return*/, window.close()];
                    }
                    console.log({ error: error_1 });
                    response_1 = error_1;
                    return [3 /*break*/, 4];
                case 4: return [4 /*yield*/, authService.validateMenu(token)];
                case 5:
                    menu = _e.sent();
                    if (menu.data.code !== 200 || !menu)
                        setAlertMenuError(true);
                    newMenuData = (0, lodash_1.get)(menu, 'data.data', []);
                    newMenus = newMenuData.filter(function (item) { return item.productName !== ""; }).map(function (item) { return item.productName; });
                    setMenus(newMenus);
                    setMenuData(newMenuData);
                    if (response_1.status !== 200) {
                        localStorage.removeItem("access-token");
                        localStorage.removeItem("refresh-token");
                        setToken(function () { return null; });
                        router.push("/main-page?logout=true");
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
                    setCountryCode(function () { return response_1.data.countryCode; });
                    a_1 = new Map();
                    productRoles = ((_d = response_1.data) === null || _d === void 0 ? void 0 : _d.productRoles) || [];
                    productRoles.forEach(function (r) {
                        a_1.set(r.productName, r.authorities);
                    });
                    setAuthorities(function () { return a_1; });
                    privilegesRecords_1 = __assign({}, productAuthorities);
                    productTypeEnumValuesFromProductRoles = Array.from(a_1.keys());
                    productTypeEnumValuesFromHardcode = Array.from(Object.values(types_1.ProductTypeEnum));
                    remainingProductTypeEnum = (0, lodash_1.difference)(productTypeEnumValuesFromProductRoles, productTypeEnumValuesFromHardcode);
                    productTypeEnumKeyFromHardcode = Object.entries(types_1.ProductTypeEnum) // from hardcode
                    ;
                    productTypeEnumKeyFromProductRoles = (0, lodash_1.map)(remainingProductTypeEnum, function (item) { return [(0, lodash_1.toUpper)((0, lodash_1.snakeCase)(item)), item]; }) // from product roles that not define by hardcode
                    ;
                    allProductTypeEnum = (0, lodash_1.concat)(productTypeEnumKeyFromHardcode, productTypeEnumKeyFromProductRoles);
                    // FIXME: delete this logic beacuse expose all product, need to get from variable productRoles / a!
                    allProductTypeEnum.forEach(function (_a) {
                        var productKey = _a[0], productValue = _a[1];
                        var productRole = a_1.get(productValue) || [];
                        productRole = productRole.map(function (e) { return e.split(":")[0]; });
                        var productAuthority = {};
                        Object.entries(types_1.AuthorityLevelEnum).forEach(function (_a) {
                            var key = _a[0], value = _a[1];
                            productAuthority[key] = productRole.includes(value);
                        });
                        productAuthority["anyAuthority"] = productRole.length > 0;
                        productAuthority["allAuthority"] = productRole.length >= Object.entries(types_1.AuthorityLevelEnum).length;
                        privilegesRecords_1[productKey] = productAuthority;
                    });
                    // Combine Authority All Product Multipayment
                    if (!(0, lodash_1.isEmpty)(newMenuData.find(function (item) { return item.productName === types_1.MultipaymentAuthorityEnum['create']; }))) {
                        menuDataMultipaymentCreate_1 = (0, lodash_1.find)(newMenuData, function (item) { return item.productName === types_1.MultipaymentAuthorityEnum['create']; });
                        menuDataMultipayment = (0, lodash_1.filter)(newMenuData, function (item) { return item.parentID === menuDataMultipaymentCreate_1.menuID; });
                        multipaymentProducts = (0, lodash_1.map)(menuDataMultipayment, 'name');
                        (0, lodash_1.map)(multipaymentProducts, function (item) {
                            privilegesRecords_1['MULTIPAYMENT'] = (0, lodash_1.mergeWith)(privilegesRecords_1['MULTIPAYMENT'], privilegesRecords_1[(0, lodash_1.toUpper)((0, lodash_1.snakeCase)(item))], function (objValue, srcValue) { return objValue || srcValue; });
                        });
                    }
                    setProductAuthorities(privilegesRecords_1);
                    setIsAuthoritiesReady(true);
                    return [2 /*return*/];
                case 6:
                    router.push("/main-page");
                    return [2 /*return*/];
            }
        });
    }); }, [token, authService]);
    var canIApprove = function (workflow, status) {
        var _a, _b, _c, _d, _e, _f;
        if (!(workflow === null || workflow === void 0 ? void 0 : workflow.workflow))
            return false;
        var _g = workflow.workflow, header = _g.header, currentStep = _g.currentStep, records = _g.records, _h = _g.currentRoleIDs, currentRoleIDs = _h === void 0 ? [] : _h, createdBy = _g.createdBy, participantUserIDs = _g.participantUserIDs;
        var product = header === null || header === void 0 ? void 0 : header.productName;
        if (!product)
            return false;
        var productKey = (0, lodash_1.toUpper)((0, lodash_1.snakeCase)(product));
        if (!productKey)
            return false;
        // @ts-ignore
        var authority = productAuthorities[productKey];
        if (!authority)
            return false;
        var approve = (0, lodash_1.get)(authority, "approve");
        var release = (0, lodash_1.get)(authority, "release");
        var verify = (0, lodash_1.get)(authority, "verify");
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
        var isCanIApprove = (approve && currentStep === types_1.StepType.Signer && roleAllowed && !alreadyApprove) ||
            (verify &&
                (currentStep === types_1.StepType.Verifier || currentStep === types_1.StepType.Checker) &&
                roleAllowed &&
                !alreadyApprove) ||
            (release && currentStep === types_1.StepType.Releaser && roleAllowed && !alreadyApprove);
        if (status) {
            return isCanIApprove && status === types_1.TaskStatus.Pending;
        }
        return isCanIApprove;
    };
    var canIDelete = function (product, status) {
        var productKey = (0, lodash_1.toUpper)((0, lodash_1.snakeCase)(product));
        if (!productKey)
            return false;
        // @ts-ignorex
        var authority = productAuthorities[productKey];
        if (!authority)
            return false;
        return status === types_1.TaskStatus.Draft && (0, lodash_1.get)(authority, "delete");
    };
    var canIEdit = function (workflow, product, status) {
        var newProduct = product;
        if (status === types_1.TaskStatus.Returned) {
            if (!(workflow === null || workflow === void 0 ? void 0 : workflow.workflow))
                return false;
            var header = workflow.workflow.header;
            newProduct = header === null || header === void 0 ? void 0 : header.productName;
        }
        if (!newProduct)
            return false;
        var productKey = (0, lodash_1.toUpper)((0, lodash_1.snakeCase)(product));
        if (!productKey)
            return false;
        // @ts-ignore
        var authority = productAuthorities[productKey];
        if (!authority)
            return false;
        var modify = (0, lodash_1.get)(authority, "modify");
        return (status === types_1.TaskStatus.Draft || status === types_1.TaskStatus.Returned) && modify;
    };
    var passwordLogin = (0, react_1.useCallback)(function (username, password, tokenFCM) { return __awaiter(void 0, void 0, void 0, function () {
        var response_2, error_2;
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
                    error_2 = _a.sent();
                    if (error_2 instanceof Error)
                        antd_1.message.error(error_2.message);
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
        // setAction(action);
        return setIsMinutes(FIFTEEN_MINUTES);
    };
    var ssoLogin = (0, react_1.useCallback)(function (userId, sessionId, dtTime, onError) { return __awaiter(void 0, void 0, void 0, function () {
        var response_3, error_3;
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
                    error_3 = _a.sent();
                    if (onError) {
                        onError(error_3.message || "Login failed");
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }, [authService, router]);
    var logout = (0, react_1.useCallback)(function (path) {
        if (path === void 0) { path = "/main-page?logout=true"; }
        return __awaiter(void 0, void 0, void 0, function () {
            var error_4, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, authService.logoutSSO("CBM")];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3:
                        _a.trys.push([3, 5, 6, 7]);
                        return [4 /*yield*/, authService.logout()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        error_5 = _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        localStorage.removeItem("access-token");
                        localStorage.removeItem("refresh-token");
                        document.cookie = "loggedIn=true; max-age=0";
                        document.cookie = "accessToken=; max-age=0";
                        sessionStorage.clear();
                        // setToken(() => null);
                        setMenus(function () { return []; });
                        setMenuData(function () { return []; });
                        router.push(path);
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }, [authService, router]);
    var checkToChangePassword = function (username, password, tokenFCM, branchCode) { return __awaiter(void 0, void 0, void 0, function () {
        var checks, result, error_6;
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
                        router.replace("/main-page/change-password?branch=".concat(branchCode));
                    }
                    else {
                        passwordLogin(username, password, tokenFCM);
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_6 = _b.sent();
                    if (error_6 instanceof Error)
                        antd_1.message.error(error_6.message);
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
    var requestChangePassword = (0, react_1.useCallback)(function (_a) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_7;
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
                    if (payload.type !== "new-login") {
                        antd_1.message.success(response.data.message);
                        router.replace("/main-page");
                    }
                    return [2 /*return*/, response];
                case 3:
                    error_7 = _b.sent();
                    if (error_7 instanceof Error && payload.type !== "new-login")
                        antd_1.message.error(error_7.message);
                    return [2 /*return*/, Promise.reject(error_7)];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [authService, router]);
    var forgotPassword = function (_a) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_8;
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
                    if (payload.type === "new-login") {
                        return [2 /*return*/, response];
                    }
                    antd_1.message.success(response.data.message);
                    return [2 /*return*/, router.replace("/main-page")];
                case 3:
                    error_8 = _b.sent();
                    if (payload.type === "new-login") {
                        return [2 /*return*/, Promise.reject(error_8)];
                    }
                    if (error_8 instanceof Error) {
                        antd_1.message.error('The information you have provided is incorrect, please try again.');
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
                    if (payload.type === "new-login") {
                        return [2 /*return*/, Promise.reject(err_1)];
                    }
                    if (err_1.response.data.code === 404) {
                        return [2 /*return*/, antd_1.message.error("Data not found")];
                    }
                    antd_1.message.error(err_1.response.data.message);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var verifyChangePasswordToken = (0, react_1.useCallback)(function (token) { return __awaiter(void 0, void 0, void 0, function () {
        var payload, response, isValid, error_9;
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
                        router.push('/main-page');
                        return [2 /*return*/];
                    }
                    return [2 /*return*/, response];
                case 3:
                    error_9 = _a.sent();
                    antd_1.message.error(error_9.response.data.message);
                    router.push('/main-page');
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [authService, router]);
    var passwordLoginWithCheck = function (username, password, tokenFCM, branchCode) { return __awaiter(void 0, void 0, void 0, function () {
        var response_4, checksChangePassword, resultChangePassword, error_10;
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
                        router.replace("/main-page/change-password?branch=".concat(branchCode));
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
                    error_10 = _b.sent();
                    if (error_10 instanceof Error)
                        antd_1.message.error(error_10.message);
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
    var login = function (username, password, branchCode, type) { return __awaiter(void 0, void 0, void 0, function () {
        var response_6, data, token_1, error_11, config;
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
                    // setCookie(null, "access-token", response.data.data.accessToken);
                    document.cookie = "loggedIn=true";
                    data = response_6.data.data;
                    document.cookie = "accessToken=;";
                    localStorage.setItem("access-token", response_6.data.data.accessToken);
                    localStorage.setItem("refresh-token", response_6.data.data.refreshToken);
                    if (data.isRedirectToChangePassword) {
                        token_1 = data.changePasswordToken;
                        router.push("/main-page/change-password?token=".concat(token_1));
                        return [2 /*return*/];
                    }
                    if (type === "new-login") {
                        return [2 /*return*/, response_6];
                    }
                    router.push("/");
                    return [2 /*return*/];
                case 3:
                    error_11 = _a.sent();
                    if (type === "new-login") {
                        return [2 /*return*/, Promise.reject(error_11)];
                    }
                    config = {
                        type: 'error',
                        content: error_11.response.data.message,
                        duration: 5,
                        style: {
                            marginLeft: '70%',
                            fontSize: 18,
                        }
                    };
                    antd_1.message.open(config);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(react_idle_timer_1.IdleTimerProvider, { onPrompt: onPrompt, onIdle: onIdle, onActive: onActive, onAction: onAction, timeout: isMinutes, children: (0, jsx_runtime_1.jsx)(AuthContext.Provider, { value: {
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
                requestChangePassword: requestChangePassword,
                canIDelete: canIDelete,
                canIEdit: canIEdit,
                action: action,
                onLeaveAction: onLeaveAction,
                setOnLeaveAction: setOnLeaveAction,
                countryCode: countryCode
            }, children: children }) }));
};
exports.AuthProvider = AuthProvider;
var useAuth = function () { return (0, react_1.useContext)(AuthContext); };
exports.useAuth = useAuth;
//# sourceMappingURL=auth.js.map