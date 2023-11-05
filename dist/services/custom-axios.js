"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customAxios = void 0;
var axios_1 = __importDefault(require("axios"));
//@ts-ignore
var crypto_js_1 = __importDefault(require("crypto-js"));
exports.customAxios = axios_1.default.create({
    baseURL: process.env["NEXT_PUBLIC_API_URL"],
    headers: {
        "Content-Type": "application/json",
    },
});
exports.customAxios.interceptors.request.use(function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var accessToken, header;
    return __generator(this, function (_a) {
        accessToken = localStorage.getItem("access-token");
        if (accessToken) {
            header = __assign(__assign({}, config.headers), { Authorization: "Bearer ".concat(accessToken) });
            config.headers = header;
        }
        return [2 /*return*/, config];
    });
}); }, function (error) { return Promise.reject(error); });
var isRefreshing = false;
var failedQueue = [];
var processQueue = function (error, token) {
    if (token === void 0) { token = null; }
    failedQueue.forEach(function (prom) {
        if (error) {
            prom.reject(error);
        }
        else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};
exports.customAxios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    var _a, _b, _c;
    var originalRequest = error.config;
    var pathname = window.location.pathname;
    var isMain = pathname === '/main-page';
    // handling error login from main-page
    if (error && isMain) {
        return Promise.reject(__assign({}, error));
    }
    if (((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) === "Another Login Detected" || (error === null || error === void 0 ? void 0 : error.message) === "Another Login Detected") {
        localStorage.removeItem("access-token");
        localStorage.removeItem("refresh-token");
        window.location.href = "/main-page?logout=true";
        return;
    }
    if (((_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.status) === 401 && !originalRequest._retry) {
        if (isRefreshing) {
            return new Promise(function (resolve, reject) {
                failedQueue.push({ resolve: resolve, reject: reject });
            })
                .then(function (token) {
                originalRequest.headers["Authorization"] = "Bearer " + token;
                return (0, exports.customAxios)(originalRequest);
            })
                .catch(function (err) {
                return Promise.reject(err);
            });
        }
        originalRequest._retry = true;
        isRefreshing = true;
        var refreshToken_1 = localStorage.getItem("refresh-token");
        if (!refreshToken_1) {
            window.location.href = "/main-page?logout=true";
        }
        return new Promise(function (resolve, reject) {
            exports.customAxios
                .post("/auth/refresh", { refreshToken: refreshToken_1 })
                .then(function (_a) {
                var _b, _c, _d, _e;
                var data = _a.data;
                if ((data.data.accessToken === "" || data.data.refreshToken === "")) {
                    console.log("Refresh token nya gak dapet, malah string kosong");
                    localStorage.removeItem("access-token");
                    localStorage.removeItem("refresh-token");
                    window.location.href = "/main-page?logout=true";
                    return;
                }
                var token = (_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.accessToken;
                var refreshToken = (_c = data === null || data === void 0 ? void 0 : data.data) === null || _c === void 0 ? void 0 : _c.accessToken;
                var companyID = (_d = data === null || data === void 0 ? void 0 : data.data) === null || _d === void 0 ? void 0 : _d.companyID;
                var userID = (_e = data === null || data === void 0 ? void 0 : data.data) === null || _e === void 0 ? void 0 : _e.userID;
                localStorage.setItem("access-token", token);
                localStorage.setItem("refresh-token", refreshToken);
                exports.customAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
                originalRequest.headers["Authorization"] = "Bearer " + token;
                if (originalRequest.data !== undefined && originalRequest.data !== null) {
                    if (originalRequest.headers["Content-Type"].toString().includes("json")) {
                        var rep = JSON.parse(originalRequest.data);
                        var signature = CreateSignature(rep, companyID, userID, process.env["NEXT_PUBLIC_SIGNATURE"], token);
                        originalRequest.headers["Grpc-Metadata-Signature"] = signature;
                    }
                    else if (originalRequest.headers["Content-Type"].toString().includes("url")) {
                        var decode = decodeURIComponent(originalRequest.data);
                        var split = decode.split("=");
                        var rep = JSON.parse(split[1]);
                        var signature = CreateSignature(rep, companyID, userID, process.env["NEXT_PUBLIC_SIGNATURE"], token);
                        originalRequest.headers["Grpc-Metadata-Signature"] = signature;
                    }
                }
                processQueue(null, token);
                resolve((0, exports.customAxios)(originalRequest));
            })
                .catch(function (err) {
                var _a, _b, _c, _d;
                if (((_b = (_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.code) === 404 && ((_d = (_c = err === null || err === void 0 ? void 0 : err.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message) === "Not Found") {
                    localStorage.removeItem("access-token");
                    localStorage.removeItem("refresh-token");
                    window.location.href = "/main-page?logout=true";
                    return;
                }
                processQueue(err, null);
                reject(err);
            })
                .finally(function () {
                isRefreshing = false;
            });
        });
    }
    if (!error.response) {
        return Promise.reject(__assign(__assign({}, error), { response: { data: { error: true, code: 504, message: "Connection Timeout" } } }));
    }
    return Promise.reject(error);
});
var CreateSignature = function (params, companyID, userID, key, token) {
    var data = "bodydata:" + JSON.stringify(params) + "&bearer:".concat(token, "&companyid:") + companyID + "&userid:" + userID;
    var hash = crypto_js_1.default.HmacSHA256(data, key);
    return hash.toString(crypto_js_1.default.enc.Hex);
};
exports.default = exports.customAxios;
//# sourceMappingURL=custom-axios.js.map