import { TaskAction, TaskStatus, TaskStep, UserTaskParams } from "../types";
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
declare const UserService: (_baseURL: string, _token: string | null) => {
    deleteUserTask: (taskID: string) => Promise<any>;
    getUsers: () => Promise<any>;
    getUsersData: (idType: string, dir?: "DESC" | "ASC") => Promise<any>;
    getUserTasks: (params: TaskParams) => Promise<{
        data: any;
        pagination: any;
    }>;
    getUserTask: (taskID: string) => Promise<any>;
    getUserTaskMeCreatedBy: () => Promise<any>;
    getUserTaskMeApprovedBy: () => Promise<any>;
    getUserRole: () => Promise<any>;
    getUsersBricamsDetail: (username: string) => Promise<any>;
    getUsersBricamsDetailv2: (username: string) => Promise<any>;
    postUserTask: (params: UserTaskParams, isDraft: boolean) => Promise<import("axios").AxiosResponse<any, any>>;
    putUserTask: (taskID: string, params: UserTaskParams, isDraft: boolean) => Promise<import("axios").AxiosResponse<any, any>>;
    getRoleData: (userTypeID: string, idCompany: any) => Promise<any>;
    getRoleUserType: () => Promise<any>;
    getActivityLogs: (params: any) => Promise<any>;
    putTaskUser: (taskId: string, action: TaskAction, reasons?: any, comment?: any) => Promise<any>;
    getTaskFromUser: (TaskID: string) => Promise<any>;
};
export default UserService;
