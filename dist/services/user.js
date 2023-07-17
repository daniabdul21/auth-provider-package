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
import customAxios from "./custom-axios";
var UserService = function (_baseURL, _token) {
    //**********************
    // User
    //**********************
    var getUsers = function () {
        return customAxios
            .get("user")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getUsersData = function (idType, dir) {
        if (dir === void 0) { dir = "DESC"; }
        return customAxios
            .get("user/data?user.idType=".concat(idType, "&dir=").concat(dir))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getTaskFromUser = function (TaskID) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    response = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, customAxios.get("/task?task.type=User&task.featureID=".concat(TaskID))];
                case 2:
                    response = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    return [2 /*return*/, error_1];
                case 4: return [2 /*return*/, response];
            }
        });
    }); };
    var getUserTasks = function (params) {
        return customAxios
            .get("user/task", { params: params })
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
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getUserTask = function (taskID) {
        return customAxios
            .get("user/task/".concat(taskID))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getUserTaskMeCreatedBy = function () {
        return customAxios
            .get("user/task/me/created-by")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getUserTaskMeApprovedBy = function () {
        return customAxios
            .get("user/task/me/approved-by")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getUserRole = function () {
        return customAxios
            .get("user-role")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var postUserTask = function (params, isDraft) {
        return customAxios
            .post("user/task", { isDraft: isDraft, data: params })
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
            console.error("error from server: " + error);
            return Promise.reject(error.response);
        });
    };
    var putTaskUser = function (taskId, action, reasons, comment) {
        if (reasons === void 0) { reasons = null; }
        if (comment === void 0) { comment = null; }
        return customAxios
            .post("/task/".concat(taskId), {
            action: action,
            reasons: reasons,
            comment: comment,
        })
            .then(function (response) {
            var _a;
            if (!response || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            console.log("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var putUserTask = function (taskID, params, isDraft) {
        return customAxios
            .post("user/task/".concat(taskID), { isDraft: isDraft, data: params })
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
            console.error("error from server: " + error);
            return Promise.reject(error.response);
        });
    };
    var deleteUserTask = function (taskID) {
        return customAxios
            .post("user/task/delete/".concat(taskID), {
            TaskID: taskID,
        })
            .then(function (response) {
            var _a, _b;
            if (!response || response.status !== 200) {
                throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            if (response.data.error) {
                throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    //**********************
    // User BRICA
    //**********************
    var getUsersBricamsDetail = function (username) {
        return (customAxios
            // .get(`user/bricams-svc/detail/${username}`)
            .post("user/bricams-svc/detail", { username: username })
            .then(function (response) {
            if (response.status !== 200) {
                throw new Error("Error");
            }
            if (!response.data.data) {
                throw new Error(response.data.responseMessage);
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        }));
    };
    var getUsersBricamsDetailv2 = function (username) {
        return customAxios
            .post("user/bricams-svc/detailv2", { username: username })
            .then(function (response) {
            if (response.status !== 200) {
                throw new Error("Error");
            }
            if (!response.data.data) {
                throw new Error(response.data.responseMessage);
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error.response.data);
        });
    };
    //**********************
    // External
    //**********************
    var getRoleData = function (userTypeID, idCompany) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, customAxios
                    .get("role/data?role.userTypeID=".concat(userTypeID, "&role.companyID=").concat(idCompany, "&dir=DESC&page=1&limit=100"))
                    .then(function (response) {
                    if (response.status !== 200) {
                        return;
                    }
                    return response.data.data;
                })];
        });
    }); };
    var getRoleUserType = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, customAxios
                        .get("role/user-type")
                        .then(function (response) {
                        var _a;
                        if (response.status !== 200) {
                            throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                        }
                        return response.data.data;
                    })
                        .catch(function (error) {
                        console.error("error from server: " + error);
                        return Promise.reject(error);
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getActivityLogs = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, search, filter, split;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = params.page, limit = params.limit, search = params.search, filter = params.filter;
                    split = filter.split(",");
                    return [4 /*yield*/, customAxios
                            .post("/task/activity-logs/User", {
                            page: page,
                            limit: limit,
                            search: search,
                            dateFrom: "".concat(split[0]),
                            dateTo: "".concat(split[1]),
                        })
                            .then(function (response) {
                            if (response.status !== 200) {
                                return;
                            }
                            return response.data;
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    return {
        deleteUserTask: deleteUserTask,
        getUsers: getUsers,
        getUsersData: getUsersData,
        getUserTasks: getUserTasks,
        getUserTask: getUserTask,
        getUserTaskMeCreatedBy: getUserTaskMeCreatedBy,
        getUserTaskMeApprovedBy: getUserTaskMeApprovedBy,
        getUserRole: getUserRole,
        getUsersBricamsDetail: getUsersBricamsDetail,
        getUsersBricamsDetailv2: getUsersBricamsDetailv2,
        postUserTask: postUserTask,
        putUserTask: putUserTask,
        getRoleData: getRoleData,
        getRoleUserType: getRoleUserType,
        getActivityLogs: getActivityLogs,
        putTaskUser: putTaskUser,
        getTaskFromUser: getTaskFromUser
    };
};
export default UserService;
//# sourceMappingURL=user.js.map