import { TaskStep } from '../types/task';
import {
    AuthorityLevelEnum,
    ProductAuthoritiesType,
    ProductAuthorityType,
  } from "../types/auth";
import {TransactionWorkflow} from "../types/workflow"
import {ProductTypeEnum} from "../types/product"
  
  const mappingStep = (step: string): TaskStep => {
    if (step === "maker") {
      return TaskStep.Maker;
    }
    if (step === "checker") {
      return TaskStep.Checker;
    }
    if (step === "signer") {
      return TaskStep.Signer;
    }
    if (step === "releaser") {
      return TaskStep.Releaser;
    }
    return TaskStep.All;
  };
  
  const createProductAuthorities = () => {
    const productAuthorities: any = {};
    const authorities: any = { allAuthority: false, anyAuthority: false };
    Object.entries(AuthorityLevelEnum).forEach(([key, value]) => {
      authorities[key] = false;
    });
    Object.entries(ProductTypeEnum).forEach(([key, value]) => {
      productAuthorities[key] = authorities;
    });
    return productAuthorities as ProductAuthoritiesType;
  };
  
  const canIApprove = (
    authority: ProductAuthorityType,
    workflow: TransactionWorkflow.Root,
    roleID?: string
  ) => {
    if (!workflow?.workflow) return false;
    const currentStep = workflow?.workflow?.currentStep;
    const flows = workflow.workflow?.records?.flows[0];
    let alreadyApprove = false;
    const roleAllowed = true;
  
    if (roleID) {
      const participants = [
        ...flows?.approver?.participants,
        ...flows?.verifier?.participants,
        ...flows?.releaser?.participants,
      ];
      const participant = participants.find((p) => p.roleID === roleID);
      // roleAllowed = !!participant;
      alreadyApprove = !!participant?.approvedAt;
    }
  
    return (
      (authority.approve &&
        currentStep === "signer" &&
        roleAllowed &&
        !alreadyApprove) ||
      (authority.verify &&
        currentStep === "verifier" &&
        roleAllowed &&
        !alreadyApprove) ||
      (authority.release &&
        currentStep === "releaser" &&
        roleAllowed &&
        !alreadyApprove)
    );
  };
  
  const checkAuthority = (
    authorities: Map<string, Array<string>>,
    module: string,
    step: TaskStep
  ) => {
    if (authorities.size < 1) {
      return false;
    }
    const hasAccessToModule = authorities.has(module);
    const hasRightAuthorities =
      mappingStep(
        (authorities.get(module) ?? [`${module}:guest`])
          .map((a) => a.split(":")[1])
          .filter((a) => a !== "-")[0]
      ) === step;
    return hasAccessToModule && hasRightAuthorities;
  };
  
  const protectByAuthority = (
    authorities: Map<string, Array<string>>,
    module: string,
    step: TaskStep,
    onRejected: () => void
  ) => {
    if (!checkAuthority(authorities, module, step)) {
      onRejected();
    }
  };
  
  export {
    checkAuthority,
    protectByAuthority,
    createProductAuthorities,
    canIApprove,
  };
  