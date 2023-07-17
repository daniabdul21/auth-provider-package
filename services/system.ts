import { TaskStatus, TaskStep, TaskAction } from "../types";
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

const SystemService = (_baseURL?: string, _token: string | null = null) => {
  //**********************
  // User
  //**********************

  const putTask = (taskId: string, action: TaskAction, reasons?: string, comment?: string) => {
    return customAxios
      .post(`/task/${taskId}`, {
        action,
        reasons,
        comment,
      })
      .then((response) => {
        if (response.status !== 200) {
          return response.data;
        }
        return response.data;
      })
      .catch((error) => {
        console.error("error from server: " + error);
        return Promise.reject(error.response.data);
      });
  };

  const getDataSystems = (params: any) => {
    return customAxios
      .get(`system/task/me`, {
        params,
      })
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
        return Promise.reject(error);
      });
  };

  const getDataSystem = (id: any) => {
    return customAxios
      .get(`system/task/${id}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.data?.message || "Server Error");
        }
        return response.data.data;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  const getSystemTasks = (params: any) => {
    const { page, limit, search, filter, sort, dir } = params;
    return customAxios
      .get(`system/task?${filter}`, {
        params: {
          page,
          limit,
          search,
          // query: query ? query : null,
          // filter: filter ? filter : null,
          sort,
          dir,
        },
      })
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
        return Promise.reject(error);
      });
  };

  const getDataSystemKey = (key: string) => {
    return customAxios
      .get(`system/key/${key}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.data?.message || "Server Error");
        }
        return response.data.data;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  const getDataSystemEmailKey = (key: string) => {
    return customAxios
      .get(`notification/key/${key}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.data?.message || "Server Error");
        }
        return response.data.data;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  const putSystemTask = (taskID: string, params: any, isDraft: boolean) => {
    return (
      customAxios
        // .put(`system/task/${taskID}`, {
        .post(`system/task/edit/${taskID}`, {
          isDraft: isDraft,
          taskID: taskID,
          data: params,
        })
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
          return Promise.reject(error.response.data);
        })
    );
  };

  //master data

  const getDataMdBiccc = (params: any) => {
    return customAxios
      .get(`/system/master-data/MdBiccc`, {
        params,
      })
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
        return Promise.reject(error);
      });
  };

  const getDataMdBenefType = (params: any) => {
    return customAxios
      .get(`/system/master-data/MdBenefType`, {
        params,
      })
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
        return Promise.reject(error);
      });
  };

  const getDataMdCountry = (params: any) => {
    return customAxios
      .get(`/system/master-data/MdCountry`, {
        params,
      })
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
        return Promise.reject(error);
      });
  };

  const getDataMdEmploymentIndustry = (params: any) => {
    return customAxios
      .get(`/system/master-data/MdEmploymentIndustry`, {
        params,
      })
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
        return Promise.reject(error);
      });
  };

  const getDataMdEmploymentPosition = (params: any) => {
    return customAxios
      .get(`/system/master-data/MdEmploymentPosition`, {
        params,
      })
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
        return Promise.reject(error);
      });
  };

  const getDataMdEmploymentStatus = (params: any) => {
    return customAxios
      .get(`/system/master-data/MdEmploymentStatus`, {
        params,
      })
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
        return Promise.reject(error);
      });
  };

  const getDataMdGender = (params: any) => {
    return customAxios
      .get(`/system/master-data/MdGender`, {
        params,
      })
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
        return Promise.reject(error);
      });
  };

  const getDataMdIdType = (params: any) => {
    return customAxios
      .get(`/system/master-data/MdIdType`, {
        params,
      })
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
        return Promise.reject(error);
      });
  };

  const getDataMdCity = (params: any) => {
    return customAxios
      .get(`/system/master-data/MdKota`, {
        params,
      })
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
        return Promise.reject(error);
      });
  };

  const getDataMdProvince = (params: any) => {
    return customAxios
      .get(`/system/master-data/MdProvince`, {
        params,
      })
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
        return Promise.reject(error);
      });
  };

  const getDataMdPurpose = (params: any) => {
    return customAxios
      .get(`/system/master-data/MdPurpose`, {
        params,
      })
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
        return Promise.reject(error);
      });
  };

  const getDataMdPurposeIntended = (params: any) => {
    return customAxios
      .get(`/system/master-data/MdPurposeIntended`, {
        params,
      })
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
        return Promise.reject(error);
      });
  };

  const getDataMdRelationToSender = (params: any) => {
    return customAxios
      .get(`/system/master-data/MdRelationToSender`, {
        params,
      })
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
        return Promise.reject(error);
      });
  };

  const getDataMdBranch = (params: any) => {
    return customAxios
      .get(`/system/master-data/MdBranch`, {
        params,
      })
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
        return Promise.reject(error);
      });
  };

  const getDataSystemAll = () => {
    return customAxios
      .get(`/system/data`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.data?.message || "Server Error");
        }
        return response.data.data;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  return {
    putTask,
    getDataSystems,
    getDataSystemAll,
    getSystemTasks,
    putSystemTask,
    getDataSystem,
    getDataMdBenefType,
    getDataMdCountry,
    getDataMdEmploymentIndustry,
    getDataMdEmploymentPosition,
    getDataMdEmploymentStatus,
    getDataMdGender,
    getDataMdIdType,
    getDataMdCity,
    getDataMdProvince,
    getDataMdPurpose,
    getDataMdPurposeIntended,
    getDataMdRelationToSender,
    getDataMdBiccc,
    getDataSystemKey,
    getDataMdBranch,
    getDataSystemEmailKey,
  };
};

export default SystemService;
