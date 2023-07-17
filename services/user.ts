import { TaskAction, TaskStatus, TaskStep, UserTaskParams } from "../types";
import customAxios from "./custom-axios";

export interface PaginationParams {
  limit?: number;
  page?: number;
  sort?: string;
  dir?: "DESC" | "ASC";
  filter?: string;
  filterOr?: string;
  query?: string;
}

export interface TaskParams extends PaginationParams {
  status?: TaskStatus | string;
  step?: TaskStep | string;
}

const UserService = (_baseURL: string, _token: string | null) => {
  //**********************
  // User
  //**********************

  const getUsers = () => {
    return customAxios
      .get(`user`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.data?.message || "Server Error");
        }
        return response.data.data;
      })
      .catch((error) => {
        console.error("error from server: " + error);
        return Promise.reject(error);
      });
  };

  const getUsersData = (idType: string, dir: "DESC" | "ASC" = "DESC") => {
    return customAxios
      .get(`user/data?user.idType=${idType}&dir=${dir}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.data?.message || "Server Error");
        }
        return response.data.data;
      })
      .catch((error) => {
        console.error("error from server: " + error);
        return Promise.reject(error);
      });
  };

  const getTaskFromUser = async (TaskID: string) => {
    let response = null;
    try {
      response = await customAxios.get(`/task?task.type=User&task.featureID=${TaskID}`);
    } catch (error) {
      return error;
    }
    return response;
  };

  const getUserTasks = (params: TaskParams) => {
    return customAxios
      .get(`user/task`, { params })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.data?.message || "Server Error");
        }
        return {
          data: response.data.data,
          pagination: response.data.pagination,
        };
      })
      .catch((error) => {
        console.error("error from server: " + error);
        return Promise.reject(error);
      });
  };

  const getUserTask = (taskID: string) => {
    return customAxios
      .get(`user/task/${taskID}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.data?.message || "Server Error");
        }
        return response.data.data;
      })
      .catch((error) => {
        console.error("error from server: " + error);
        return Promise.reject(error);
      });
  };

  const getUserTaskMeCreatedBy = () => {
    return customAxios
      .get(`user/task/me/created-by`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.data?.message || "Server Error");
        }
        return response.data.data;
      })
      .catch((error) => {
        console.error("error from server: " + error);
        return Promise.reject(error);
      });
  };

  const getUserTaskMeApprovedBy = () => {
    return customAxios
      .get(`user/task/me/approved-by`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.data?.message || "Server Error");
        }
        return response.data.data;
      })
      .catch((error) => {
        console.error("error from server: " + error);
        return Promise.reject(error);
      });
  };

  const getUserRole = () => {
    return customAxios
      .get(`user-role`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.data?.message || "Server Error");
        }
        return response.data.data;
      })
      .catch((error) => {
        console.error("error from server: " + error);
        return Promise.reject(error);
      });
  };

  const postUserTask = (params: UserTaskParams, isDraft: boolean) => {
    return customAxios
      .post(`user/task`, { isDraft, data: params })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response?.data?.message || "Server Error");
        }
        if (response.data.error) {
          throw new Error(response?.data?.message || "Server Error");
        }
        return response;
      })
      .catch((error) => {
        console.error("error from server: " + error);
        return Promise.reject(error.response);
      });
  };

  const putTaskUser = (taskId: string, action: TaskAction, reasons: any = null, comment: any = null) => {
    return customAxios
      .post(`/task/${taskId}`, {
        action,
        reasons,
        comment,
      })
      .then((response) => {
        if (!response || response.status !== 200) {
          throw new Error(response.data?.message || "Server Error");
        }
        return response.data;
      })
      .catch((error) => {
        console.log("error from server: " + error);
        return Promise.reject(error);
      });
  };

  const putUserTask = (taskID: string, params: UserTaskParams, isDraft: boolean) => {
    return customAxios
      .post(`user/task/${taskID}`, { isDraft, data: params })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response?.data?.message || "Server Error");
        }
        if (response.data.error) {
          throw new Error(response?.data?.message || "Server Error");
        }
        return response;
      })
      .catch((error) => {
        console.error("error from server: " + error);
        return Promise.reject(error.response);
      });
  };

  const deleteUserTask = (taskID: string) => {
    return customAxios
      .post(`user/task/delete/${taskID}`, {
        TaskID: taskID,
      })
      .then((response) => {
        if (!response || response.status !== 200) {
          throw new Error(response?.data?.message || "Server Error");
        }
        if (response.data.error) {
          throw new Error(response?.data?.message || "Server Error");
        }
        return response.data;
      })
      .catch((error) => {
        console.error("error from server: " + error);
        return Promise.reject(error);
      });
  };

  //**********************
  // User BRICA
  //**********************

  const getUsersBricamsDetail = (username: string) => {
    return (
      customAxios
        // .get(`user/bricams-svc/detail/${username}`)
        .post(`user/bricams-svc/detail`, { username })
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("Error");
          }
          if (!response.data.data) {
            throw new Error(response.data.responseMessage);
          }
          return response.data.data;
        })
        .catch((error) => {
          console.error("error from server: " + error);
          return Promise.reject(error);
        })
    );
  };

  const getUsersBricamsDetailv2 = (username: string) => {
    return customAxios
      .post(`user/bricams-svc/detailv2`, { username })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Error");
        }
        if (!response.data.data) {
          throw new Error(response.data.responseMessage);
        }
        return response.data.data;
      })
      .catch((error) => {
        console.error("error from server: " + error);
        return Promise.reject(error.response.data);
      });
  };

  //**********************
  // External
  //**********************

  const getRoleData = async (userTypeID: string, idCompany: any) => {
    return customAxios
      .get(`role/data?role.userTypeID=${userTypeID}&role.companyID=${idCompany}&dir=DESC&page=1&limit=100`)
      .then((response) => {
        if (response.status !== 200) {
          return;
        }
        return response.data.data;
      });
  };

  const getRoleUserType = async () => {
    return await customAxios
      .get(`role/user-type`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.data?.message || "Server Error");
        }
        return response.data.data;
      })
      .catch((error) => {
        console.error("error from server: " + error);
        return Promise.reject(error);
      });
  };

  const getActivityLogs = async (params: any) => {
    const { page, limit, search, filter } = params;
    const split = filter.split(",");
    return await customAxios
      .post(`/task/activity-logs/User`, {
        page: page,
        limit: limit,
        search: search,
        dateFrom: `${split[0]}`,
        dateTo: `${split[1]}`,
      })
      .then((response) => {
        if (response.status !== 200) {
          return;
        }
        return response.data;
      });
  };

  return {
    deleteUserTask,
    getUsers,
    getUsersData,
    getUserTasks,
    getUserTask,
    getUserTaskMeCreatedBy,
    getUserTaskMeApprovedBy,
    getUserRole,
    getUsersBricamsDetail,
    getUsersBricamsDetailv2,
    postUserTask,
    putUserTask,
    getRoleData,
    getRoleUserType,
    getActivityLogs,
    putTaskUser,
    getTaskFromUser
  };
};

export default UserService;
