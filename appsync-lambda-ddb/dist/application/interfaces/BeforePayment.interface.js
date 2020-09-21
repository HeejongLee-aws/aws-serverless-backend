"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeforePayment = void 0;
var BeforePayment = /** @class */ (function () {
    function BeforePayment(partitionkey, sortkey, attribute1, attribute2) {
        this.partitionkey = partitionkey;
        this.sortkey = sortkey;
        this.attribute1 = attribute1;
        this.attribute2 = attribute2;
    }
    Object.defineProperty(BeforePayment.prototype, "getPartitionkey", {
        get: function () {
            return this.partitionkey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BeforePayment.prototype, "getSortkey", {
        get: function () {
            return this.partitionkey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BeforePayment.prototype, "getAttribute1", {
        get: function () {
            return this.attribute1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BeforePayment.prototype, "getAttribute2", {
        get: function () {
            return this.attribute2;
        },
        enumerable: false,
        configurable: true
    });
    return BeforePayment;
}());
exports.BeforePayment = BeforePayment;
