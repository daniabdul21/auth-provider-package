import customAxios from "./custom-axios";
var ProductService = function (_baseURL, _token) {
    var getProducts = function (infinite, userType) {
        if (infinite === void 0) { infinite = false; }
        if (infinite) {
            return customAxios
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
        return customAxios.get("/product").then(function (response) {
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
export default ProductService;
//# sourceMappingURL=products.js.map