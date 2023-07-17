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
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "../auth";
import { SYSTEM_STORE_INITIAL_STATE } from "./initial-state";
// import {  } from "./loaders";
import { ProductService, SystemService, UserService, } from "../../services";
import { globalStoreReducer } from "./reducer";
import { GlobalStoreActionTypeEnum, } from "../../types";
var SET_PRODUCTS = GlobalStoreActionTypeEnum.SET_PRODUCTS, SET_BRICAMS_USER = GlobalStoreActionTypeEnum.SET_BRICAMS_USER, SET_SYSTEM_CONFIG = GlobalStoreActionTypeEnum.SET_SYSTEM_CONFIG, SET_ERROR = GlobalStoreActionTypeEnum.SET_ERROR, SET_LOADING = GlobalStoreActionTypeEnum.SET_LOADING;
var GlobalStoreContext = createContext(__assign(__assign({}, SYSTEM_STORE_INITIAL_STATE), { dispatch: function (_state) { } }));
export var GlobalStoreProvider = function (_a) {
    var children = _a.children;
    var _b = useReducer(globalStoreReducer, SYSTEM_STORE_INITIAL_STATE), store = _b[0], dispatch = _b[1];
    var baseUrl = "".concat(process.env["NEXT_PUBLIC_API_URL"]);
    var _c = useAuth(), token = _c.token, username = _c.username;
    var getDataSystemAll = SystemService(baseUrl, token).getDataSystemAll;
    var getProducts = ProductService(baseUrl, token).getProducts;
    var getUsersBricamsDetail = UserService(baseUrl, token).getUsersBricamsDetail;
    var loadSystemConfig = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dispatch({ type: SET_LOADING, payload: "systemConfig" });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, getDataSystemAll()];
                case 2:
                    res = _a.sent();
                    dispatch({
                        type: SET_SYSTEM_CONFIG,
                        payload: res,
                    });
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    dispatch({
                        type: SET_ERROR,
                        payload: {
                            key: "systemConfig",
                            err: err_1
                        }
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var loadProducts = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dispatch({ type: SET_LOADING, payload: "products" });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, getProducts()];
                case 2:
                    res = _a.sent();
                    dispatch({
                        type: SET_PRODUCTS,
                        payload: res.data,
                    });
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    dispatch({
                        type: SET_ERROR,
                        payload: {
                            key: "products",
                            err: err_2
                        }
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var loadBricamsUser = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dispatch({ type: SET_LOADING, payload: "bricamsUser" });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, getUsersBricamsDetail(username)];
                case 2:
                    res = _a.sent();
                    dispatch({
                        type: SET_BRICAMS_USER,
                        payload: res,
                    });
                    return [3 /*break*/, 4];
                case 3:
                    err_3 = _a.sent();
                    dispatch({
                        type: SET_ERROR,
                        payload: {
                            key: "bricamsUser",
                            err: err_3
                        }
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        if (token) {
            loadSystemConfig();
            loadProducts();
        }
    }, [!!token]);
    useEffect(function () {
        if (!!token && username !== "Guest" && !!username) {
            loadBricamsUser();
        }
    }, [!!token, username]);
    return (_jsx(GlobalStoreContext.Provider, { value: __assign(__assign({}, store), { dispatch: dispatch }), children: children }));
};
export var useGlobalStore = function () { return useContext(GlobalStoreContext); };
//# sourceMappingURL=index.js.map