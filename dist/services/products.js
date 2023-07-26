"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var custom_axios_1 = __importDefault(require("./custom-axios"));
var ProductService = function (_baseURL, _token) {
    var getProducts = function (infinite, userType) {
        if (infinite === void 0) { infinite = false; }
        if (infinite) {
            return custom_axios_1.default
                .get("/product", {
                params: {
                    page: 1,
                    limit: 1000,
                    "product.IsBa": userType === "bank-admin",
                    "product.IsCa": userType === "customer-admin",
                    "product.IsCu": userType === "customer-user",
                },
            })
                .then(function (response) {
                if (response.status !== 200) {
                    throw new Error("Error");
                }
                return {
                    data: response.data.data,
                    pagination: response.data.pagination,
                };
            });
        }
        return custom_axios_1.default.get("/product").then(function (response) {
            if (response.status !== 200) {
                throw new Error("Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        });
    };
    return {
        getProducts: getProducts,
    };
};
exports.default = ProductService;
//# sourceMappingURL=products.js.map