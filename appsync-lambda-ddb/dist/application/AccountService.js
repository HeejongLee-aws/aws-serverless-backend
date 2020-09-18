"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Account_1 = __importDefault(require("../domain/Account"));
var AccountMockRepository_1 = __importDefault(require("../infra/AccountMockRepository"));
var AccountService = /** @class */ (function () {
    function AccountService() {
        this.accountRepository = new AccountMockRepository_1.default();
    }
    AccountService.prototype.createAccount = function (path) {
        var account = this.accountRepository.save(new Account_1.default("001", "KIM JONG IL"));
        return account.getAccount;
    };
    AccountService.prototype.listAccount = function (path) {
        var accountList = this.accountRepository.findAll();
        var accountString = "";
        accountList.forEach(function (account) {
            accountString += account.getAccount + " ";
            console.log(accountString);
        });
        return accountString;
    };
    return AccountService;
}());
exports.default = AccountService;
