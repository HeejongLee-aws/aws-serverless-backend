"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dynamodb_data_mapper_annotations_1 = require("@aws/dynamodb-data-mapper-annotations");
var Payment = /** @class */ (function () {
    function Payment() {
    }
    Payment_1 = Payment;
    /**
     *
     */
    Payment.prototype.domainlogic = function () {
        this.attribute1 = "1";
        return this.attribute1;
    };
    Object.defineProperty(Payment.prototype, "toJson", {
        get: function () {
            return JSON.stringify(this);
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * https://github.com/awslabs/dynamodb-data-mapper-js/issues/136
     * @param partitionkey
     * @param sortkey
     * @param attribute1
     */
    Payment.createObject = function (partitionkey, sortkey, attribute1, attribute2) {
        return Object.assign(new Payment_1, {
            partitionkey: partitionkey,
            sortkey: sortkey,
            attribute1: attribute1,
            attribute2: attribute2
        });
    };
    var Payment_1;
    __decorate([
        dynamodb_data_mapper_annotations_1.hashKey(),
        __metadata("design:type", String)
    ], Payment.prototype, "partitionkey", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.rangeKey(),
        __metadata("design:type", String)
    ], Payment.prototype, "sortkey", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], Payment.prototype, "attribute1", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", String)
    ], Payment.prototype, "attribute2", void 0);
    Payment = Payment_1 = __decorate([
        dynamodb_data_mapper_annotations_1.table('appsync-lambda-ddb-PaymentTable-SLR2SSXZPOFG')
    ], Payment);
    return Payment;
}());
exports.default = Payment;
