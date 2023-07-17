import { TaskStatus, TaskStep } from "../types";
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

const ProductService = (_baseURL: string, _token: string | null) => {
  const getProducts = (infinite = false, userType?: string) => {
    if (infinite) {
      return customAxios
        .get(`/product`, {
          params: {
            page: 1,
            limit: 1000,
            "product.IsBa": userType === "bank-admin",
            "product.IsCa": userType === "customer-admin",
            "product.IsCu": userType === "customer-user",
          },
        })
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("Error");
          }
          return {
            data: response.data.data,
            pagination: response.data.pagination,
          };
        });
    }
    return customAxios.get(`/product`).then((response) => {
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
    getProducts,
  };
};

export default ProductService;
