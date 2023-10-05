"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskAction = exports.StepType = exports.TaskStep = exports.TaskStatus = void 0;
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["All"] = "All";
    TaskStatus["Approved"] = "Approved";
    TaskStatus["Deleted"] = "Deleted";
    TaskStatus["DeleteRequest"] = "DeleteRequest";
    TaskStatus["Draft"] = "Draft";
    TaskStatus["Pending"] = "Pending";
    TaskStatus["Rejected"] = "Rejected";
    TaskStatus["Returned"] = "Returned";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
var TaskStep;
(function (TaskStep) {
    TaskStep["All"] = "All";
    TaskStep["Maker"] = "Maker";
    TaskStep["Checker"] = "Checker";
    TaskStep["Signer"] = "Signer";
    TaskStep["Releaser"] = "Releaser";
})(TaskStep || (exports.TaskStep = TaskStep = {}));
var StepType;
(function (StepType) {
    StepType["Checker"] = "checker";
    StepType["Releaser"] = "releaser";
    StepType["Signer"] = "signer";
    StepType["Verifier"] = "verifier";
})(StepType || (exports.StepType = StepType = {}));
var TaskAction;
(function (TaskAction) {
    TaskAction["Approve"] = "approve";
    TaskAction["Reject"] = "reject";
    TaskAction["Rework"] = "rework";
    TaskAction["Cancel"] = "cancel";
    TaskAction["Delete"] = "delete";
    TaskAction["Submit"] = "submit";
    TaskAction["All"] = "All";
})(TaskAction || (exports.TaskAction = TaskAction = {}));
//# sourceMappingURL=task.js.map