"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customAxios = exports.UserService = exports.SystemService = exports.AuthService = exports.ProductService = void 0;
var products_1 = __importDefault(require("./products"));
exports.ProductService = products_1.default;
var auth_1 = __importDefault(require("./auth"));
exports.AuthService = auth_1.default;
var custom_axios_1 = __importDefault(require("./custom-axios"));
exports.customAxios = custom_axios_1.default;
var system_1 = __importDefault(require("./system"));
exports.SystemService = system_1.default;
var user_1 = __importDefault(require("./user"));
exports.UserService = user_1.default;
//# sourceMappingURL=index.js.map