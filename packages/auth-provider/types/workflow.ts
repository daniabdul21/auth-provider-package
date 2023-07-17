/* eslint-disable @typescript-eslint/no-namespace */
import { TaskData } from "./task";

export interface WorkflowParams {
  workflowCode: string;
  description: string;
  moduleID: string;
  companyID: string;
  accountID: string;
}

export interface Workflow extends WorkflowParams {
  // workflowID: string;
  // moduleID: string;
  // companyID: string;
  // accountID: string;
  createdByID: string;
  updatedByID: string;
  deletedByID: string;
  accountAlias: string;
  // workflowCode: string;
  // description: string;
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
  export interface Header {
    productID: string;
    productName: string;
    currencyID: string;
    currencyName: string;
    companyID: string;
    companyName: string;
    transactionalNumber: string;
    workflowID: string;
  }

  export interface Verifier {
    approvedCount: number;
    rejectedCount: number;
    Requirement: number;
    participants: any[];
  }

  export interface Participant {
    userID: string;
    userName: string;
    roleID: string;
    isReject: boolean;
    approvedAt?: any;
    step: string;
  }

  export interface Approver {
    approvedCount: number;
    rejectedCount: number;
    Requirement: number;
    participants: Participant[];
  }

  export interface Releaser {
    approvedCount: number;
    rejectedCount: number;
    Requirement: number;
    participants: any[];
  }

  export interface Flow {
    workflowLogicID: string;
    verifier: Verifier;
    approver: Approver;
    releaser: Releaser;
    isRejected: boolean;
    completedAt?: any;
  }

  export interface Records {
    lastUpdatedAt: string;
    topRange: string;
    bottomRange: string;
    flows: Flow[];
  }

  export interface CreatedBy {
    userID: string;
    username: string;
  }

  export interface Workflow {
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

  export interface Root {
    workflow: Workflow;
    nextStatus: string;
    nextStep: string;
  }

  export enum StepType {
    Verifier = "verifier",
    Approver = "approver",
    Releaser = "releaser",
  }
}

export type { TransactionWorkflow };
