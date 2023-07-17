import { TaskStatus, TaskStep, TaskAction } from "../types";
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
declare const SystemService: (_baseURL?: string, _token?: string | null) => {
    putTask: (taskId: string, action: TaskAction, reasons?: string, comment?: string) => Promise<any>;
    getDataSystems: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataSystemAll: () => Promise<any>;
    getSystemTasks: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    putSystemTask: (taskID: string, params: any, isDraft: boolean) => Promise<import("axios").AxiosResponse<any, any>>;
    getDataSystem: (id: any) => Promise<any>;
    getDataMdBenefType: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataMdCountry: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataMdEmploymentIndustry: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataMdEmploymentPosition: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataMdEmploymentStatus: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataMdGender: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataMdIdType: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataMdCity: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataMdProvince: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataMdPurpose: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataMdPurposeIntended: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataMdRelationToSender: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataMdBiccc: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataSystemKey: (key: string) => Promise<any>;
    getDataMdBranch: (params: any) => Promise<{
        data: any;
        pagination: any;
    }>;
    getDataSystemEmailKey: (key: string) => Promise<any>;
};
export default SystemService;
