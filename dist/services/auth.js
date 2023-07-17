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
import customAxios from "./custom-axios";
var AuthService = function () {
    var crypto = require("crypto-js");
    var headersWithSignature = function (signature) {
        return {
            "x-signature": signature,
        };
    };
    var CreateSignature = function (params) {
        var secret = process.env["NEXT_PUBLIC_SECRET_KEY_LOGIN_V2"] || "addons";
        var data = JSON.stringify(params);
        var hash = crypto.HmacSHA256(data, secret);
        return hash.toString();
    };
    var validateToken = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, customAxios.get("/auth/me")];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var validateMenu = function (token) {
        return customAxios
            .post("/menu/me", { token: token })
            .then(function (response) {
            if (response.status !== 200) {
                throw new Error("Error");
            }
            return response;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var checkToChangePasswordLogin = function (username, password, branchCode) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, customAxios.post("/auth/v2/login", {
                            username: username,
                            password: password,
                            branchCode: branchCode,
                        })];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200) {
                        throw new Error("Username or password not valid!");
                    }
                    return [2 /*return*/, response];
                case 2:
                    error_1 = _a.sent();
                    return [2 /*return*/, Promise.reject(error_1)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var testingFunction = function () {
        console.log("Hallo ajah");
    };
    var requestChangePassword = function (_a) { return __awaiter(void 0, void 0, void 0, function () {
        var prepareData, response, error_2;
        var payload = __rest(_a, []);
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    prepareData = {
                        branchCode: payload.branchCode,
                        username: payload.username,
                        tempPassword: payload.tempPassword,
                        password: payload.password,
                        confirmPassword: payload.confirmPassword,
                        answerQuestion1: payload.answerQuestion1,
                        answerQuestion2: payload.answerQuestion2,
                        token: payload.tokenFCM,
                    };
                    return [4 /*yield*/, customAxios.post("/auth/change-password", prepareData)];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error("Username or password not valid!");
                    }
                    return [2 /*return*/, response];
                case 2:
                    error_2 = _b.sent();
                    return [2 /*return*/, Promise.reject(error_2)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var forgotPassword = function (_a) { return __awaiter(void 0, void 0, void 0, function () {
        var prepareData, response, error_3;
        var payload = __rest(_a, []);
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    prepareData = __assign({}, payload);
                    return [4 /*yield*/, customAxios.post("/auth/forgot-password", prepareData)];
                case 1:
                    response = _b.sent();
                    if (response.status !== 200) {
                        throw new Error("Username or password not valid!");
                    }
                    return [2 /*return*/, response];
                case 2:
                    error_3 = _b.sent();
                    return [2 /*return*/, Promise.reject(error_3)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var verifyUserQuestion = function (_a) { return __awaiter(void 0, void 0, void 0, function () {
        var prepareData, response, error_4;
        var payload = __rest(_a, []);
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    prepareData = __assign({}, payload);
                    return [4 /*yield*/, customAxios.post("/auth/verify-question", prepareData)];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, response];
                case 2:
                    error_4 = _b.sent();
                    return [2 /*return*/, Promise.reject(error_4)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var verifyChangePasswordToken = function (_a) { return __awaiter(void 0, void 0, void 0, function () {
        var prepareData, response, error_5;
        var payload = __rest(_a, []);
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    prepareData = __assign({}, payload);
                    return [4 /*yield*/, customAxios.post("/auth/verify-change-password-token", prepareData)];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, response];
                case 2:
                    error_5 = _b.sent();
                    return [2 /*return*/, Promise.reject(error_5)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var passwordLogin = function (username, password, tokenFCM) { return __awaiter(void 0, void 0, void 0, function () {
        var response, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, customAxios.post("/auth/login/password", {
                            username: username,
                            password: password,
                            tokenFCM: tokenFCM,
                        })];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200) {
                        throw new Error("Username or password not valid!");
                    }
                    return [2 /*return*/, response];
                case 2:
                    err_1 = _a.sent();
                    return [2 /*return*/, Promise.reject(err_1)];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var ssoLogin = function (userId, sessionId, dtTime) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!userId || !sessionId || !dtTime) {
                        throw new Error("User ID, Session ID and Datetime are required");
                    }
                    return [4 /*yield*/, customAxios.get("/auth/login", {
                            params: {
                                USERID: encodeURIComponent(userId),
                                SESSIONID: encodeURIComponent(sessionId),
                                DTTIME: encodeURIComponent(dtTime),
                            },
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var ssoLoginQlola = function (request) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, customAxios
                    .post("/auth/login/init-token", { request: request })
                    .then(function (response) {
                    var _a;
                    if (response.status !== 200)
                        throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                    return {
                        data: response.data,
                    };
                })
                    .catch(function (error) {
                    return Promise.reject(error);
                })];
        });
    }); };
    var logoutSSO = function (clientName) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, customAxios
                        .get("sso/signout/".concat(clientName))
                        .then(function (response) {
                        if (response.status !== 200) {
                            return;
                        }
                        return response;
                    })
                        .catch(function (err) {
                        return Promise.reject(err);
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var login = function (branchCode, username, password) { return __awaiter(void 0, void 0, void 0, function () {
        var data, hash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = { username: username, password: password, branchCode: branchCode };
                    hash = CreateSignature(data);
                    return [4 /*yield*/, customAxios
                            .post("auth/v2/login", data, {
                            headers: headersWithSignature(hash),
                        })
                            .then(function (response) {
                            return response;
                        })
                            .catch(function (err) {
                            return Promise.reject(err);
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var logout = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, customAxios.get("/auth/logout")];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    return {
        validateToken: validateToken,
        validateMenu: validateMenu,
        passwordLogin: passwordLogin,
        ssoLogin: ssoLogin,
        logout: logout,
        logoutSSO: logoutSSO,
        checkToChangePasswordLogin: checkToChangePasswordLogin,
        requestChangePassword: requestChangePassword,
        testingFunction: testingFunction,
        ssoLoginQlola: ssoLoginQlola,
        login: login,
        forgotPassword: forgotPassword,
        verifyUserQuestion: verifyUserQuestion,
        verifyChangePasswordToken: verifyChangePasswordToken,
    };
};
export default AuthService;
//# sourceMappingURL=auth.js.map