"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var tableName = process.env.SAMPLE_TABLE;
var dynamodb = require('aws-sdk/clients/dynamodb');
var docClient = new dynamodb.DocumentClient();
function createArtist(artistId, concert, ticketSales) {
    return __awaiter(this, void 0, void 0, function () {
        var params, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = {
                        TableName: tableName,
                        Item: {
                            "ArtistId": artistId,
                            "Concert": concert,
                            "TicketSales": ticketSales
                        }
                    };
                    console.log("param: ", params);
                    return [4 /*yield*/, docClient.put(params).promise()];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getArtist(artistId, concert) {
    return __awaiter(this, void 0, void 0, function () {
        var params, data, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = {
                        TableName: tableName,
                        Key: { "ArtistId": artistId, "Concert": concert },
                    };
                    return [4 /*yield*/, docClient.get(params).promise()];
                case 1:
                    data = _a.sent();
                    item = data.Item;
                    return [2 /*return*/, item];
            }
        });
    });
}
function getConcertsByArtistId(artistId) {
    return __awaiter(this, void 0, void 0, function () {
        var params, data, items;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = {
                        TableName: tableName,
                        KeyConditionExpression: "#artistId = :artistId",
                        ExpressionAttributeNames: {
                            "#artistId": "ArtistId"
                        },
                        ExpressionAttributeValues: {
                            ":artistId": artistId
                        }
                    };
                    console.log(params);
                    return [4 /*yield*/, docClient.query(params).promise()];
                case 1:
                    data = _a.sent();
                    items = data.Items;
                    console.log(items);
                    return [2 /*return*/, items];
            }
        });
    });
}
exports.lambdaHandler = function (event, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response, item, items;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.info('received:', event);
                console.info('context:', context);
                response = null;
                if (!(event.info.fieldName == 'createArtist')) return [3 /*break*/, 2];
                return [4 /*yield*/, createArtist(event.arguments.input.ArtistId, event.arguments.input.Concert, event.arguments.input.TicketSales)];
            case 1:
                _a.sent();
                response = event.arguments.input;
                return [3 /*break*/, 6];
            case 2:
                if (!(event.info.fieldName == 'getArtist')) return [3 /*break*/, 4];
                return [4 /*yield*/, getArtist(event.arguments.input.ArtistId, event.arguments.input.Concert)];
            case 3:
                item = _a.sent();
                response = item;
                return [3 /*break*/, 6];
            case 4:
                if (!(event.info.fieldName == 'getConcertsByArtistId')) return [3 /*break*/, 6];
                return [4 /*yield*/, getConcertsByArtistId(event.arguments.input.ArtistId)];
            case 5:
                items = _a.sent();
                response = items;
                _a.label = 6;
            case 6: return [2 /*return*/, response];
        }
    });
}); };
// export async function lambdaHandler(event, context) {
//     let accountController = new AccountController();
//     try {
//         if (event.httpMethod === 'POST' && event.path === '/accounts') {
//             response = accountController.createAccount(event);
//         } else if (event.httpMethod === 'GET' && event.path === '/accounts') {
//             response = accountController.listAccount(event);
//         }
//     } catch (err) {
//         console.log(err);
//         return err;
//     }
//     return response
// };
