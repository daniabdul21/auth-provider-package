export enum TaskStatus {
    All = "All",
    Approved = "Approved",
    Deleted = "Deleted",
    DeleteRequest = "DeleteRequest",
    Draft = "Draft",
    Pending = "Pending",
    Rejected = "Rejected",
    Returned = "Returned",
  }

  export enum TaskStep {
    All = "All",
    Maker = "Maker",
    Checker = "Checker",
    Signer = "Signer",
    Releaser = "Releaser",
  }

export interface TaskData {
    taskID?: string;
    type?: string;
    status?: TaskStatus;
    step?: TaskStep;
    data?: string;
    createdByID?: number;
    lastApprovedByID?: number;
    lastRejectedByID?: number;
    lastApprovedByName?: string;
    lastRejectedByName?: string;
    createdByName?: string;
    createdAt?: string;
    updatedAt?: string;
  }