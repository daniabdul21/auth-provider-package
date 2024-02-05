"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeNameEnum = exports.ProductTypeEnumUpperCase = exports.ProductIdByTypeEnum = exports.ProductTypeEnum = void 0;
var ProductTypeEnum;
(function (ProductTypeEnum) {
    ProductTypeEnum["ALL"] = "All";
    ProductTypeEnum["ACCOUNT"] = "Account";
    ProductTypeEnum["ANNOUNCEMENT"] = "Announcement";
    ProductTypeEnum["BENEFICIARY_ACCOUNT"] = "Beneficiary Account";
    ProductTypeEnum["BG_HISTORY"] = "BG History";
    ProductTypeEnum["BG_ISSUING"] = "BG Issuing";
    ProductTypeEnum["BG_MAPPING"] = "BG Mapping";
    ProductTypeEnum["BG_MAPPING_DIGITAL"] = "BG Mapping Digital";
    ProductTypeEnum["BG_MONITORING"] = "BG Monitoring";
    ProductTypeEnum["CASH_POOLING"] = "Cash Pooling";
    ProductTypeEnum["CBM"] = "CBM";
    ProductTypeEnum["COMPANY"] = "Company";
    ProductTypeEnum["COMPANY_NEW"] = "Company";
    ProductTypeEnum["CUT_OFF"] = "Cut Off";
    ProductTypeEnum["DEPOSITO"] = "Deposito";
    ProductTypeEnum["DIGI_GUARANTEE"] = "BG Issuing";
    ProductTypeEnum["EXTERNAL_FUND_TRANSFER"] = "External Fund Transfer";
    ProductTypeEnum["HELPDESK"] = "Helpdesk";
    ProductTypeEnum["HOLIDAY"] = "Holiday";
    ProductTypeEnum["IMPORT_LC"] = "Import LC";
    ProductTypeEnum["INTERNAL_FUND_TRANSFER"] = "Internal Fund Transfer";
    ProductTypeEnum["MANAGE_DEPOSIT_ACCOUNT"] = "Manage Deposit Account";
    ProductTypeEnum["MENU_APPEARANCE"] = "Menu:Appearance";
    ProductTypeEnum["MENU_LICENSE"] = "Menu:License";
    ProductTypeEnum["MULTIPAYMENT_CREATE"] = "Multipayment Create";
    ProductTypeEnum["MULTIPAYMENT_HISTORY"] = "Multipayment History";
    ProductTypeEnum["NOTIFICATION"] = "Notification";
    ProductTypeEnum["OPEN_NEW_TIME_DEPOSIT"] = "Open New Time Deposit";
    ProductTypeEnum["PAYROLL_TRANSFER"] = "Payroll Transfer";
    ProductTypeEnum["PAYROLL_TRANSFER_HISTORY"] = "Payroll Transfer History";
    ProductTypeEnum["PROXY_REGISTRATION"] = "Proxy Registration";
    ProductTypeEnum["ROLE"] = "Role";
    ProductTypeEnum["SSO_CLIENT"] = "SSO:Client";
    ProductTypeEnum["SSO_COMPANY"] = "SSO:Company";
    ProductTypeEnum["SSO_USER"] = "SSO:User";
    ProductTypeEnum["SUBSCRIPTION"] = "Subscription";
    ProductTypeEnum["SWIFT"] = "Swift";
    ProductTypeEnum["SWIFT_HISTORY"] = "Swift History";
    ProductTypeEnum["SWIFT_OVERVIEW"] = "Swift Overview";
    ProductTypeEnum["SYSTEM"] = "System";
    ProductTypeEnum["TICKET"] = "Ticket";
    ProductTypeEnum["TIME_DEPOSIT_ACCOUNTS"] = "Time Deposit Accounts";
    ProductTypeEnum["TRADE_IMPORT_ISSUANCE_LC"] = "Trade Import Issuance LC";
    ProductTypeEnum["UPLOAD_TRANSFER"] = "Upload Transfer";
    ProductTypeEnum["UPLOAD_TRANSFER_HISTORY"] = "Upload Transfer History";
    ProductTypeEnum["USER"] = "User";
    ProductTypeEnum["WITHDRAW_DEPOSIT"] = "Withdraw Deposit";
    ProductTypeEnum["WORKFLOW"] = "Workflow";
    ProductTypeEnum["BI_FAST"] = "BI-Fast";
    ProductTypeEnum["BULK_TRANSFER"] = "Bulk Transfer";
    ProductTypeEnum["ONLINE_TRANSFER"] = "Online Transfer";
    ProductTypeEnum["KLIRING"] = "Kliring";
    ProductTypeEnum["RTGS"] = "RTGS";
    ProductTypeEnum["ACCOUNT_STATEMENT"] = "Account Statement";
    ProductTypeEnum["ACCOUNT_SUMMARY"] = "Account Summary";
    ProductTypeEnum["MPN"] = "MPN";
    ProductTypeEnum["PACKAGE_MANAGEMENT"] = "Package Management";
    ProductTypeEnum["MASS_TRANSFER"] = "Mass Transfer";
    ProductTypeEnum["MASS_TRANSFER_CREATE"] = "Mass Transfer Create";
    ProductTypeEnum["MASS_TRANSFER_HISTORY"] = "Mass Transfer History";
    ProductTypeEnum["MASS_TRANSFER_TRANSACTION_ACTION"] = "Mass Transfer Transaction Action";
    ProductTypeEnum["USER_MANAGEMENT"] = "User";
    ProductTypeEnum["BPDP_SAWIT"] = "BPDP Sawit";
    ProductTypeEnum["INQUIRY_BILLING_DJBC"] = "Inquiry Billing DJBC";
    ProductTypeEnum["INCOMING_DOCUMENT"] = "Incoming Document";
    ProductTypeEnum["REPORT_STATEMENT"] = "Report Statement";
    ProductTypeEnum["BILLING_MANAGEMENT"] = "Billing Management";
    ProductTypeEnum["SMART_BILLING_MANAGEMENT"] = "Smart Billing Management";
    ProductTypeEnum["SMART_BILLING_HISTORY"] = "Smart Billing History";
    ProductTypeEnum["LIST_DETAIL_BILLING_MANAGEMENT"] = "List Detail Billing Management";
    ProductTypeEnum["REPORT_BILLING_MANAGEMENT"] = "Report Billing Management";
    ProductTypeEnum["GLOBAL_ACCOUNT_STATEMENT"] = "Global Account Statement";
    ProductTypeEnum["GLOBAL_INTERNAL_FUND_TRANSFER"] = "Global Internal Fund Transfer";
    ProductTypeEnum["GLOBAL_EXTERNAL_FUND_TRANSFER"] = "Global External Fund Transfer";
    ProductTypeEnum["GLOBAL_TRANSACTION_ACTION"] = "Global Transaction Action";
    ProductTypeEnum["GLOBAL_TRANSACTION_INQUIRY"] = "Global Transaction Inquiry";
    ProductTypeEnum["UPLOAD_CC_PAYMENT"] = "Upload CC Payment";
    ProductTypeEnum["UPLOAD_MANDATE"] = "Upload Mandate";
    ProductTypeEnum["MAKER_CONFIRMATION"] = "Maker Confirmation";
    ProductTypeEnum["DIRECT_DEBIT"] = "Direct Debit";
    ProductTypeEnum["RECEIVABLE_ACTION"] = "Receivable Action";
    ProductTypeEnum["UPLOAD_DIRECT_DEBIT"] = "Upload Direct Debit";
    ProductTypeEnum["COUNTER_PARTY_VALIDATION"] = "Counter Party Validation";
    ProductTypeEnum["MANDATE_MANAGEMENT"] = "Mandate Management";
    ProductTypeEnum["RECEIVABLE_OVERVIEW"] = "Receivable Overview";
    ProductTypeEnum["RECEIVABLE_REPORTS"] = "Receivable Reports";
    ProductTypeEnum["DO_PERTAMINA"] = "Do Pertamina";
    ProductTypeEnum["NOTIONAL_POOLING"] = "National Pooling";
})(ProductTypeEnum || (exports.ProductTypeEnum = ProductTypeEnum = {}));
// Product Id by Product Type
var ProductIdByTypeEnum;
(function (ProductIdByTypeEnum) {
    ProductIdByTypeEnum["ACCOUNT"] = "4";
    ProductIdByTypeEnum["AMEND_CANCEL_LC"] = "190";
    ProductIdByTypeEnum["ANNOUNCEMENT"] = "1";
    ProductIdByTypeEnum["BENEFICIARY_ACCOUNT"] = "35";
    ProductIdByTypeEnum["BG_HISTORY"] = "86";
    ProductIdByTypeEnum["BG_ISSUING"] = "85";
    ProductIdByTypeEnum["BG_MAPPING"] = "50";
    ProductIdByTypeEnum["BG_MAPPING_DIGITAL"] = "51";
    ProductIdByTypeEnum["BG_MONITORING"] = "49";
    ProductIdByTypeEnum["CASH_POOLING"] = "11";
    ProductIdByTypeEnum["CBM"] = "12";
    ProductIdByTypeEnum["COMPANY"] = "2";
    ProductIdByTypeEnum["COMPANY_NEW"] = "2";
    ProductIdByTypeEnum["CUT_OFF"] = "223";
    ProductIdByTypeEnum["DEPOSITO"] = "84";
    ProductIdByTypeEnum["DIGI_GUARANTEE"] = "85";
    ProductIdByTypeEnum["EXTERNAL_FUND_TRANSFER"] = "126";
    ProductIdByTypeEnum["HELPDESK"] = "46";
    ProductIdByTypeEnum["HOLIDAY"] = "224";
    ProductIdByTypeEnum["IMPORT_LC"] = "43";
    ProductIdByTypeEnum["INTERNAL_FUND_TRANSFER"] = "120";
    ProductIdByTypeEnum["INTERNAL_FUND_TRANSFER_HISTORY"] = "121";
    ProductIdByTypeEnum["MANAGE_DEPOSIT_ACCOUNT"] = "189";
    ProductIdByTypeEnum["MENU_APPEARANCE"] = "8";
    ProductIdByTypeEnum["MENU_LICENSE"] = "39";
    ProductIdByTypeEnum["NOTIFICATION"] = "3";
    ProductIdByTypeEnum["OPEN_NEW_TIME_DEPOSIT"] = "186";
    ProductIdByTypeEnum["PAYROLL_TRANSFER"] = "124";
    ProductIdByTypeEnum["PAYROLL_TRANSFER_HISTORY"] = "125";
    ProductIdByTypeEnum["PROXY_REGISTRATION"] = "231";
    ProductIdByTypeEnum["REPORT"] = "41";
    ProductIdByTypeEnum["ROLE"] = "6";
    ProductIdByTypeEnum["SSO_CLIENT"] = "36";
    ProductIdByTypeEnum["SSO_DATA"] = "42";
    ProductIdByTypeEnum["SSO_COMPANY"] = "38";
    ProductIdByTypeEnum["SSO_USER"] = "37";
    ProductIdByTypeEnum["SUBSCRIPTION"] = "10";
    ProductIdByTypeEnum["SWIFT"] = "100";
    ProductIdByTypeEnum["SWIFT_HISTORY"] = "45";
    ProductIdByTypeEnum["SWIFT_OVERVIEW"] = "44";
    ProductIdByTypeEnum["SYSTEM"] = "40";
    ProductIdByTypeEnum["TICKET"] = "Ticket";
    ProductIdByTypeEnum["TIME_DEPOSIT_ACCOUNTS"] = "187";
    // TRADE_IMPORT_ISSUANCE_LC = "Trade Import Issuance LC",
    ProductIdByTypeEnum["UPLOAD_TRANSFER"] = "122";
    ProductIdByTypeEnum["UPLOAD_TRANSFER_HISTORY"] = "123";
    ProductIdByTypeEnum["USER"] = "7";
    ProductIdByTypeEnum["USER_MANAGEMENT"] = "7";
    // WITHDRAW_DEPOSIT = "Withdraw Deposit",
    ProductIdByTypeEnum["WORKFLOW"] = "9";
    ProductIdByTypeEnum["BI_FAST"] = "227";
    ProductIdByTypeEnum["BULK_TRANSFER"] = "229";
    ProductIdByTypeEnum["ONLINE_TRANSFER"] = "228";
    ProductIdByTypeEnum["KLIRING"] = "230";
    ProductIdByTypeEnum["RTGS"] = "225";
    ProductIdByTypeEnum["PACKAGE_MANAGEMENT"] = "235";
    ProductIdByTypeEnum["MPN"] = "233";
    ProductIdByTypeEnum["ACCOUNT_STATEMENT"] = "236";
    ProductIdByTypeEnum["ACCOUNT_SUMMARY"] = "238";
    ProductIdByTypeEnum["MASS_TRANSFER_CREATE"] = "250";
    ProductIdByTypeEnum["MASS_TRANSFER_TRANSACTION_ACTION"] = "252";
    ProductIdByTypeEnum["MASS_TRANSFER_HISTORY"] = "251";
    ProductIdByTypeEnum["INQUIRY_BILLING_DJBC"] = "255";
    ProductIdByTypeEnum["INCOMING_DOCUMENT"] = "256";
    ProductIdByTypeEnum["REPORT_STATEMENT"] = "258";
    ProductIdByTypeEnum["BILLING_MANAGEMENT"] = "321";
    ProductIdByTypeEnum["SMART_BILLING_MANAGEMENT"] = "322";
    ProductIdByTypeEnum["SMART_BILLING_HISTORY"] = "323";
    ProductIdByTypeEnum["LIST_DETAIL_BILLING_MANAGEMENT"] = "324";
    ProductIdByTypeEnum["REPORT_BILLING_MANAGEMENT"] = "325";
    ProductIdByTypeEnum["GLOBAL_ACCOUNT_STATEMENT"] = "425";
    ProductIdByTypeEnum["GLOBAL_INTERNAL_FUND_TRANSFER"] = "419";
    ProductIdByTypeEnum["GLOBAL_EXTERNAL_FUND_TRANSFER"] = "420";
    ProductIdByTypeEnum["GLOBAL_TRANSACTION_ACTION"] = "421";
    ProductIdByTypeEnum["GLOBAL_TRANSACTION_INQUIRY"] = "422";
    ProductIdByTypeEnum["UPLOAD_CC_PAYMENT"] = "424";
    ProductIdByTypeEnum["UPLOAD_MANDATE"] = "257";
    ProductIdByTypeEnum["MAKER_CONFIRMATION"] = "280";
    ProductIdByTypeEnum["DIRECT_DEBIT"] = "315";
    ProductIdByTypeEnum["RECEIVABLE_ACTION"] = "318";
    ProductIdByTypeEnum["UPLOAD_DIRECT_DEBIT"] = "316";
    ProductIdByTypeEnum["COUNTER_PARTY_VALIDATION"] = "317";
    ProductIdByTypeEnum["MANDATE_MANAGEMENT"] = "314";
    ProductIdByTypeEnum["RECEIVABLE_OVERVIEW"] = "313";
    ProductIdByTypeEnum["RECEIVABLE_REPORTS"] = "428";
    ProductIdByTypeEnum["DO_PERTAMINA"] = "430";
    ProductIdByTypeEnum["NOTIONAL_POOLING"] = "526";
})(ProductIdByTypeEnum || (exports.ProductIdByTypeEnum = ProductIdByTypeEnum = {}));
//sementara
var ProductTypeEnumUpperCase;
(function (ProductTypeEnumUpperCase) {
    ProductTypeEnumUpperCase["ALL"] = "ALL";
    ProductTypeEnumUpperCase["SWIFT"] = "SWIFT";
    ProductTypeEnumUpperCase["SWIFT_HISTORY"] = "SWIFT_HISTORY";
    ProductTypeEnumUpperCase["BI_FAST"] = "BI_FAST";
    ProductTypeEnumUpperCase["ONLINE_TRANSFER"] = "ONLINE_TRANSFER";
    ProductTypeEnumUpperCase["KLIRING"] = "KLIRING";
    ProductTypeEnumUpperCase["MULTIPAYMENT_HISTORY"] = "MULTIPAYMENT_HISTORY";
    ProductTypeEnumUpperCase["BULK_TRANSFER"] = "BULK_TRANSFER";
    ProductTypeEnumUpperCase["RTGS"] = "RTGS";
})(ProductTypeEnumUpperCase || (exports.ProductTypeEnumUpperCase = ProductTypeEnumUpperCase = {}));
var ProductTypeNameEnum;
(function (ProductTypeNameEnum) {
    ProductTypeNameEnum["ALL"] = "All";
    ProductTypeNameEnum["ACCOUNT"] = "Account Management";
    ProductTypeNameEnum["ANNOUNCEMENT"] = "Announcement Management";
    ProductTypeNameEnum["BENEFICIARY_ACCOUNT"] = "Beneficiary Account";
    ProductTypeNameEnum["BG_HISTORY"] = "BG History";
    ProductTypeNameEnum["BG_ISSUING"] = "BG Issuing";
    ProductTypeNameEnum["BG_MAPPING"] = "BG Mapping";
    ProductTypeNameEnum["BG_MAPPING_DIGITAL"] = "BG Mapping Digital";
    ProductTypeNameEnum["BG_MONITORING"] = "BG Monitoring";
    ProductTypeNameEnum["CASH_POOLING"] = "Cash Pooling";
    ProductTypeNameEnum["CBM"] = "CBM";
    ProductTypeNameEnum["COMPANY"] = "Company Management";
    ProductTypeNameEnum["COMPANY_NEW"] = "Company Management New";
    ProductTypeNameEnum["CUT_OFF"] = "Cut Off Management";
    ProductTypeNameEnum["DEPOSITO"] = "Deposito";
    ProductTypeNameEnum["DIGI_GUARANTEE"] = "Digi Guarantee";
    ProductTypeNameEnum["EXTERNAL_FUND_TRANSFER"] = "External Fund Transfer";
    ProductTypeNameEnum["HELPDESK"] = "Helpdesk";
    ProductTypeNameEnum["HOLIDAY"] = "Holiday Management";
    ProductTypeNameEnum["IMPORT_LC"] = "Import LC";
    ProductTypeNameEnum["INTERNAL_FUND_TRANSFER"] = "Internal Fund Transfer";
    ProductTypeNameEnum["MANAGE_DEPOSIT_ACCOUNT"] = "Manage Deposit Account";
    ProductTypeNameEnum["MENU_APPEARANCE"] = "Menu Appearance";
    ProductTypeNameEnum["MENU_LICENSE"] = "Menu License";
    ProductTypeNameEnum["NOTIFICATION"] = "Notification";
    ProductTypeNameEnum["OPEN_NEW_TIME_DEPOSIT"] = "Open New Time Deposit";
    ProductTypeNameEnum["PAYROLL_TRANSFER"] = "Payroll Transfer";
    ProductTypeNameEnum["PAYROLL_TRANSFER_HISTORY"] = "Payroll Transfer History";
    ProductTypeNameEnum["PROXY_REGISTRATION"] = "Proxy Registration";
    ProductTypeNameEnum["ROLE"] = "Role Management";
    ProductTypeNameEnum["SSO_CLIENT"] = "SSO Client Management";
    ProductTypeNameEnum["SSO_COMPANY"] = "SSO Company Management";
    ProductTypeNameEnum["SSO_USER"] = "SSO User Management";
    ProductTypeNameEnum["SUBSCRIPTION"] = "Subscription Management";
    ProductTypeNameEnum["SWIFT"] = "Swift";
    ProductTypeNameEnum["SWIFT_HISTORY"] = "Swift History";
    ProductTypeNameEnum["SWIFT_OVERVIEW"] = "Swift Overview";
    ProductTypeNameEnum["SYSTEM"] = "System Management";
    ProductTypeNameEnum["TICKET"] = "Ticket";
    ProductTypeNameEnum["TIME_DEPOSIT_ACCOUNTS"] = "Time Deposit Accounts";
    ProductTypeNameEnum["TRADE_IMPORT_ISSUANCE_LC"] = "Trade Import Issuance LC";
    ProductTypeNameEnum["UPLOAD_TRANSFER"] = "Upload Transfer";
    ProductTypeNameEnum["UPLOAD_TRANSFER_HISTORY"] = "Upload Transfer History";
    ProductTypeNameEnum["USER"] = "User Management";
    ProductTypeNameEnum["USER_MANAGEMENT"] = "User Management V2";
    ProductTypeNameEnum["WITHDRAW_DEPOSIT"] = "Withdraw Deposit";
    ProductTypeNameEnum["WORKFLOW"] = "Workflow Management";
    ProductTypeNameEnum["BI_FAST"] = "BI-Fast Transfer";
    ProductTypeNameEnum["BULK_TRANSFER"] = "Bulk Transfer";
    ProductTypeNameEnum["ONLINE_TRANSFER"] = "Online Transfer";
    ProductTypeNameEnum["KLIRING"] = "Kliring";
    ProductTypeNameEnum["RTGS"] = "RTGS";
    ProductTypeNameEnum["MPN"] = "MPN";
    ProductTypeNameEnum["PACKAGE_MANAGEMENT"] = "Package Management";
    ProductTypeNameEnum["MASS_TRANSFER"] = "Mass Transfer";
    ProductTypeNameEnum["MASS_TRANSFER_CREATE"] = "Mass Transfer Create";
    ProductTypeNameEnum["MASS_TRANSFER_HISTORY"] = "Mass Transfer History";
    ProductTypeNameEnum["MASS_TRANSFER_TRANSACTION_ACTION"] = "Mass Transfer Transaction Action";
    ProductTypeNameEnum["BPDP_SAWIT"] = "BPDP Sawit";
    ProductTypeNameEnum["INQUIRY_BILLING_DJBC"] = "Inquiry Billing DJBC";
    ProductTypeNameEnum["INCOMING_DOCUMENT"] = "Incoming Document";
    ProductTypeNameEnum["REPORT_STATEMENT"] = "Report Statement";
    ProductTypeNameEnum["BILLING_MANAGEMENT"] = "Billing Management";
    ProductTypeNameEnum["SMART_BILLING_MANAGEMENT"] = "Smart Billing Management";
    ProductTypeNameEnum["SMART_BILLING_HISTORY"] = "Smart Billing History";
    ProductTypeNameEnum["LIST_DETAIL_BILLING_MANAGEMENT"] = "List Detail Billing Management";
    ProductTypeNameEnum["REPORT_BILLING_MANAGEMENT"] = "Report Billing Management";
    ProductTypeNameEnum["GLOBAL_ACCOUNT_STATEMENT"] = "Global Account Statement";
    ProductTypeNameEnum["GLOBAL_INTERNAL_FUND_TRANSFER"] = "Global Internal Fund Transfer";
    ProductTypeNameEnum["GLOBAL_EXTERNAL_FUND_TRANSFER"] = "Global External Fund Transfer";
    ProductTypeNameEnum["GLOBAL_TRANSACTION_ACTION"] = "Global Transaction Action";
    ProductTypeNameEnum["GLOBAL_TRANSACTION_INQUIRY"] = "Global Transaction Inquiry";
    ProductTypeNameEnum["UPLOAD_CC_PAYMENT"] = "Upload CC Payment";
    ProductTypeNameEnum["UPLOAD_MANDATE"] = "Upload Mandate";
    ProductTypeNameEnum["MAKER_CONFIRMATION"] = "Maker Confirmation";
    ProductTypeNameEnum["DIRECT_DEBIT"] = "Direct Debit";
    ProductTypeNameEnum["RECEIVABLE_ACTION"] = "Receivable Action";
    ProductTypeNameEnum["UPLOAD_DIRECT_DEBIT"] = "Upload Direct Debit";
    ProductTypeNameEnum["COUNTER_PARTY_VALIDATION"] = "Counter Party Validation";
    ProductTypeNameEnum["MANDATE_MANAGEMENT"] = "Mandate Management";
    ProductTypeNameEnum["RECEIVABLE_OVERVIEW"] = "Receivable Overview";
    ProductTypeNameEnum["RECEIVABLE_REPORTS"] = "Receivable Reports";
    ProductTypeNameEnum["DO_PERTAMINA"] = "Do Pertamina";
    ProductTypeNameEnum["NOTIONAL_POOLING"] = "National Pooling";
})(ProductTypeNameEnum || (exports.ProductTypeNameEnum = ProductTypeNameEnum = {}));
//# sourceMappingURL=product.js.map