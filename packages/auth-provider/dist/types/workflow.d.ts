import { TaskData } from "./task";
export interface WorkflowParams {
    workflowCode: string;
    description: string;
    moduleID: string;
    companyID: string;
    accountID: string;
}
export interface Workflow extends WorkflowParams {
    createdByID: string;
    updatedByID: string;
    deletedByID: string;
    accountAlias: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
export interface WorkflowCompany {
    id: string;
    name: string;
    branchCode: string;
}
export type WorkflowWithTask = {
    workflow: any;
    company: any;
} & {
    task: TaskData;
};
declare namespace TransactionWorkflow {
    interface Header {
        productID: string;
        productName: string;
        currencyID: string;
        currencyName: string;
        companyID: string;
        companyName: string;
        transactionalNumber: string;
        workflowID: string;
    }
    interface Verifier {
        approvedCount: number;
        rejectedCount: number;
        Requirement: number;
        participants: any[];
    }
    interface Participant {
        userID: string;
        userName: string;
        roleID: string;
        isReject: boolean;
        approvedAt?: any;
        step: string;
    }
    interface Approver {
        approvedCount: number;
        rejectedCount: number;
        Requirement: number;
        participants: Participant[];
    }
    interface Releaser {
        approvedCount: number;
        rejectedCount: number;
        Requirement: number;
        participants: any[];
    }
    interface Flow {
        workflowLogicID: string;
        verifier: Verifier;
        approver: Approver;
        releaser: Releaser;
        isRejected: boolean;
        completedAt?: any;
    }
    interface Records {
        lastUpdatedAt: string;
        topRange: string;
        bottomRange: string;
        flows: Flow[];
    }
    interface CreatedBy {
        userID: string;
        username: string;
    }
    interface Workflow {
        header: Header;
        records: Records;
        createdBy: CreatedBy;
        createdAt: string;
        isDefault: boolean;
        isTransactional: boolean;
        currentRoleIDs: string[];
        currentStep: string;
        participantUserIDs?: string[];
    }
    interface Root {
        workflow: Workflow;
        nextStatus: string;
        nextStep: string;
    }
    enum StepType {
        Verifier = "verifier",
        Approver = "approver",
        Releaser = "releaser"
    }
}
export type { TransactionWorkflow };
