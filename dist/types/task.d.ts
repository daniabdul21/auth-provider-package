export declare enum TaskStatus {
    All = "All",
    Approved = "Approved",
    Deleted = "Deleted",
    DeleteRequest = "DeleteRequest",
    Draft = "Draft",
    Pending = "Pending",
    Rejected = "Rejected",
    Returned = "Returned"
}
export declare enum TaskStep {
    All = "All",
    Maker = "Maker",
    Checker = "Checker",
    Signer = "Signer",
    Releaser = "Releaser"
}
export declare enum StepType {
    Checker = "checker",
    Releaser = "releaser",
    Signer = "signer",
    Verifier = "verifier"
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
export declare enum TaskAction {
    Approve = "approve",
    Reject = "reject",
    Rework = "rework",
    Cancel = "cancel",
    Delete = "delete",
    Submit = "submit",
    All = "All"
}
