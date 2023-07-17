import { TaskData } from "./task";

export interface User extends UserParams {
  userID: string;
  // username: string;
  // idType: string;
  // idNumber: string;
  // userTypeID: string;
  userTypeName: string;
  companyID: string;
  companyName: string;
  // isBlocked: boolean;
  createdByID: string;
  updatedByID: string;
  deletedByID: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export type UserWithRole = {
  user: User;
} & {
  roles: Array<RoleParams>;
};

export type UserRoleWithTask = {
  user: UserWithRole;
} & {
  task: TaskData;
};

export interface UserBricamsDetail {
  idUser: string;
  username: string;
  idCompany: string;
  phoneNumber: string;
  email: string;
  fullName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  idToken: string;
  createdDate: Date;
}

export interface UserParams {
  username: string;
  idType: string;
  idNumber: string;
  userTypeID: string;
  isBlocked: boolean;
}

export interface RoleParams {
  roleID: string;
  roleName: string;
}

export interface UserTaskParams {
  user: UserParams;
  roles: Array<RoleParams>;
}

export interface UserTaskResponse {
  data: Array<UserRoleWithTask>;
  pagination: {
    limit: number;
    page: number;
    totalRows: string;
    totalPages: number;
  };
}
