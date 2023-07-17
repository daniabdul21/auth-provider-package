var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { TaskStep } from '../types/task';
import { AuthorityLevelEnum, } from "../types/auth";
import { ProductTypeEnum } from "../types/product";
var mappingStep = function (step) {
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
var createProductAuthorities = function () {
    var productAuthorities = {};
    var authorities = { allAuthority: false, anyAuthority: false };
    Object.entries(AuthorityLevelEnum).forEach(function (_a) {
        var key = _a[0], _value = _a[1];
        authorities[key] = false;
    });
    Object.entries(ProductTypeEnum).forEach(function (_a) {
        var key = _a[0], _value = _a[1];
        productAuthorities[key] = authorities;
    });
    return productAuthorities;
};
var canIApprove = function (authority, workflow, roleID) {
    var _a, _b, _c, _d, _e, _f;
    if (!(workflow === null || workflow === void 0 ? void 0 : workflow.workflow))
        return false;
    var currentStep = (_a = workflow === null || workflow === void 0 ? void 0 : workflow.workflow) === null || _a === void 0 ? void 0 : _a.currentStep;
    var flows = (_c = (_b = workflow.workflow) === null || _b === void 0 ? void 0 : _b.records) === null || _c === void 0 ? void 0 : _c.flows[0];
    var alreadyApprove = false;
    var roleAllowed = true;
    if (roleID) {
        var participants = __spreadArray(__spreadArray(__spreadArray([], (_d = flows === null || flows === void 0 ? void 0 : flows.approver) === null || _d === void 0 ? void 0 : _d.participants, true), (_e = flows === null || flows === void 0 ? void 0 : flows.verifier) === null || _e === void 0 ? void 0 : _e.participants, true), (_f = flows === null || flows === void 0 ? void 0 : flows.releaser) === null || _f === void 0 ? void 0 : _f.participants, true);
        var participant = participants.find(function (p) { return p.roleID === roleID; });
        // roleAllowed = !!participant;
        alreadyApprove = !!(participant === null || participant === void 0 ? void 0 : participant.approvedAt);
    }
    return ((authority.approve &&
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
            !alreadyApprove));
};
var checkAuthority = function (authorities, module, step) {
    var _a;
    if (authorities.size < 1) {
        return false;
    }
    var hasAccessToModule = authorities.has(module);
    var hasRightAuthorities = mappingStep(((_a = authorities.get(module)) !== null && _a !== void 0 ? _a : ["".concat(module, ":guest")])
        .map(function (a) { return a.split(":")[1]; })
        .filter(function (a) { return a !== "-"; })[0]) === step;
    return hasAccessToModule && hasRightAuthorities;
};
var protectByAuthority = function (authorities, module, step, onRejected) {
    if (!checkAuthority(authorities, module, step)) {
        onRejected();
    }
};
export { checkAuthority, protectByAuthority, createProductAuthorities, canIApprove, };
//# sourceMappingURL=auth.js.map