import { TaskStep } from '../types/task';
import { ProductAuthoritiesType, ProductAuthorityType } from "../types/auth";
import { TransactionWorkflow } from "../types/workflow";
declare const createProductAuthorities: () => ProductAuthoritiesType;
declare const canIApprove: (authority: ProductAuthorityType, workflow: TransactionWorkflow.Root, roleID?: string) => boolean;
declare const checkAuthority: (authorities: Map<string, Array<string>>, module: string, step: TaskStep) => boolean;
declare const protectByAuthority: (authorities: Map<string, Array<string>>, module: string, step: TaskStep, onRejected: () => void) => void;
export { checkAuthority, protectByAuthority, createProductAuthorities, canIApprove, };
