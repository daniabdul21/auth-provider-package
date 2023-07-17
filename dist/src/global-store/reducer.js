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
import { GlobalStoreActionTypeEnum, } from "../../types";
import { SYSTEM_STORE_INITIAL_STATE } from "./initial-state";
var SET_PRODUCTS = GlobalStoreActionTypeEnum.SET_PRODUCTS, SET_BRICAMS_USER = GlobalStoreActionTypeEnum.SET_BRICAMS_USER, SET_SYSTEM_CONFIG = GlobalStoreActionTypeEnum.SET_SYSTEM_CONFIG, CLEAN_DATA = GlobalStoreActionTypeEnum.CLEAN_DATA, PATCH_DATA = GlobalStoreActionTypeEnum.PATCH_DATA, SET_LOADING = GlobalStoreActionTypeEnum.SET_LOADING, SET_ERROR = GlobalStoreActionTypeEnum.SET_ERROR;
export var globalStoreReducer = function (state, action) {
    var _a, _b, _c;
    if (action === void 0) { action = {}; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case PATCH_DATA:
            return __assign(__assign({}, state), payload);
        case SET_PRODUCTS:
            return __assign(__assign({}, state), { products: payload, isLoading: __assign(__assign({}, state.isLoading), { products: false }) });
        case SET_BRICAMS_USER:
            return __assign(__assign({}, state), { bricamsUser: payload, isLoading: __assign(__assign({}, state.isLoading), { bricamsUser: false }) });
        case SET_SYSTEM_CONFIG:
            return __assign(__assign({}, state), { systemConfig: payload, isLoading: __assign(__assign({}, state.isLoading), { systemConfig: false }) });
        case SET_LOADING:
            return __assign(__assign({}, state), { isLoading: __assign(__assign({}, state.isLoading), (_a = {}, _a[payload] = true, _a)) });
        case SET_ERROR:
            return __assign(__assign({}, state), { errors: __assign(__assign({}, state.errors), (_b = {}, _b[payload.key] = payload.err, _b)), isLoading: __assign(__assign({}, state.isLoading), (_c = {}, _c[payload.key] = false, _c)) });
        case CLEAN_DATA:
            return __assign({}, SYSTEM_STORE_INITIAL_STATE);
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map