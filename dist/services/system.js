"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var custom_axios_1 = __importDefault(require("./custom-axios"));
var SystemService = function (_baseURL, _token) {
    //**********************
    // User
    //**********************
    if (_token === void 0) { _token = null; }
    var putTask = function (taskId, action, reasons, comment) {
        return custom_axios_1.default
            .post("/task/".concat(taskId), {
            action: action,
            reasons: reasons,
            comment: comment,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return response.data;
            }
            return response.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error.response.data);
        });
    };
    var getDataSystems = function (params) {
        return custom_axios_1.default
            .get("system/task/me", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataSystem = function (id) {
        return custom_axios_1.default
            .get("system/task/".concat(id))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getSystemTasks = function (params) {
        var page = params.page, limit = params.limit, search = params.search, filter = params.filter, sort = params.sort, dir = params.dir;
        return custom_axios_1.default
            .get("system/task?".concat(filter), {
            params: {
                page: page,
                limit: limit,
                search: search,
                // query: query ? query : null,
                // filter: filter ? filter : null,
                sort: sort,
                dir: dir,
            },
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataSystemKey = function (key) {
        return custom_axios_1.default
            .get("system/key/".concat(key))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataSystemEmailKey = function (key) {
        return custom_axios_1.default
            .get("notification/key/".concat(key))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var putSystemTask = function (taskID, params, isDraft) {
        return (custom_axios_1.default
            // .put(`system/task/${taskID}`, {
            .post("system/task/edit/".concat(taskID), {
            isDraft: isDraft,
            taskID: taskID,
            data: params,
        })
            .then(function (response) {
            var _a, _b;
            if (response.status !== 200) {
                throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            if (response.data.error) {
                throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
            }
            return response;
        })
            .catch(function (error) {
            return Promise.reject(error.response.data);
        }));
    };
    //master data
    var getDataMdBiccc = function (params) {
        return custom_axios_1.default
            .get("/system/master-data/MdBiccc", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataMdBenefType = function (params) {
        return custom_axios_1.default
            .get("/system/master-data/MdBenefType", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataMdCountry = function (params) {
        return custom_axios_1.default
            .get("/system/master-data/MdCountry", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataMdEmploymentIndustry = function (params) {
        return custom_axios_1.default
            .get("/system/master-data/MdEmploymentIndustry", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataMdEmploymentPosition = function (params) {
        return custom_axios_1.default
            .get("/system/master-data/MdEmploymentPosition", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataMdEmploymentStatus = function (params) {
        return custom_axios_1.default
            .get("/system/master-data/MdEmploymentStatus", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataMdGender = function (params) {
        return custom_axios_1.default
            .get("/system/master-data/MdGender", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataMdIdType = function (params) {
        return custom_axios_1.default
            .get("/system/master-data/MdIdType", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataMdCity = function (params) {
        return custom_axios_1.default
            .get("/system/master-data/MdKota", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataMdProvince = function (params) {
        return custom_axios_1.default
            .get("/system/master-data/MdProvince", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataMdPurpose = function (params) {
        return custom_axios_1.default
            .get("/system/master-data/MdPurpose", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataMdPurposeIntended = function (params) {
        return custom_axios_1.default
            .get("/system/master-data/MdPurposeIntended", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataMdRelationToSender = function (params) {
        return custom_axios_1.default
            .get("/system/master-data/MdRelationToSender", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataMdBranch = function (params) {
        return custom_axios_1.default
            .get("/system/master-data/MdBranch", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getDataSystemAll = function () {
        return custom_axios_1.default
            .get("/system/data")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    return {
        putTask: putTask,
        getDataSystems: getDataSystems,
        getDataSystemAll: getDataSystemAll,
        getSystemTasks: getSystemTasks,
        putSystemTask: putSystemTask,
        getDataSystem: getDataSystem,
        getDataMdBenefType: getDataMdBenefType,
        getDataMdCountry: getDataMdCountry,
        getDataMdEmploymentIndustry: getDataMdEmploymentIndustry,
        getDataMdEmploymentPosition: getDataMdEmploymentPosition,
        getDataMdEmploymentStatus: getDataMdEmploymentStatus,
        getDataMdGender: getDataMdGender,
        getDataMdIdType: getDataMdIdType,
        getDataMdCity: getDataMdCity,
        getDataMdProvince: getDataMdProvince,
        getDataMdPurpose: getDataMdPurpose,
        getDataMdPurposeIntended: getDataMdPurposeIntended,
        getDataMdRelationToSender: getDataMdRelationToSender,
        getDataMdBiccc: getDataMdBiccc,
        getDataSystemKey: getDataSystemKey,
        getDataMdBranch: getDataMdBranch,
        getDataSystemEmailKey: getDataSystemEmailKey,
    };
};
exports.default = SystemService;
//# sourceMappingURL=system.js.map