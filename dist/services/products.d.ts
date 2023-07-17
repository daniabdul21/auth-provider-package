import { TaskStatus, TaskStep } from "../types";
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
declare const ProductService: (_baseURL: string, _token: string | null) => {
    getProducts: (infinite?: boolean, userType?: string) => Promise<{
        data: any;
        pagination: any;
    }>;
};
export default ProductService;
