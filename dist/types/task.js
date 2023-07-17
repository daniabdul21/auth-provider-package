export var TaskStatus;
(function (TaskStatus) {
    TaskStatus["All"] = "All";
    TaskStatus["Approved"] = "Approved";
    TaskStatus["Deleted"] = "Deleted";
    TaskStatus["DeleteRequest"] = "DeleteRequest";
    TaskStatus["Draft"] = "Draft";
    TaskStatus["Pending"] = "Pending";
    TaskStatus["Rejected"] = "Rejected";
    TaskStatus["Returned"] = "Returned";
})(TaskStatus || (TaskStatus = {}));
export var TaskStep;
(function (TaskStep) {
    TaskStep["All"] = "All";
    TaskStep["Maker"] = "Maker";
    TaskStep["Checker"] = "Checker";
    TaskStep["Signer"] = "Signer";
    TaskStep["Releaser"] = "Releaser";
})(TaskStep || (TaskStep = {}));
export var TaskAction;
(function (TaskAction) {
    TaskAction["Approve"] = "approve";
    TaskAction["Reject"] = "reject";
    TaskAction["Rework"] = "rework";
    TaskAction["Cancel"] = "cancel";
    TaskAction["Delete"] = "delete";
    TaskAction["Submit"] = "submit";
    TaskAction["All"] = "All";
})(TaskAction || (TaskAction = {}));
//# sourceMappingURL=task.js.map