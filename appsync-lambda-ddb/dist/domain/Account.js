"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account = /** @class */ (function () {
    function Account(id, name) {
        this.id = id;
        this.name = name;
    }
    Object.defineProperty(Account.prototype, "getAccount", {
        get: function () {
            return this.id + ":" + this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
exports.default = Account;
