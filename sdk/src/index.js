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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVault = exports.getVault = void 0;
var algosdk_1 = require("algosdk");
var ed25519_1 = require("@noble/curves/ed25519");
var base58_1 = require("./base58");
var buffer_1 = require("buffer");
var algodToken = ""; //API token
var port = 443;
var algodServer = "https://mainnet-api.algonode.cloud/";
var algodClient = new algosdk_1.default.Algodv2(algodToken, algodServer, port);
var b58 = new base58_1.default();
var vaultUrl = "https://linkvault.com.ng/l#";
function accountBalances(address) {
    return __awaiter(this, void 0, void 0, function () {
        var accountInfo, assets, algorand, balances;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, algodClient.accountInformation(address).do()];
                case 1:
                    accountInfo = _a.sent();
                    assets = [];
                    algorand = { amount: accountInfo.amount };
                    algorand["asset-id"] = 0;
                    algorand["is-frozen"] = false;
                    assets.push.apply(assets, __spreadArray([algorand], accountInfo.assets, false));
                    balances = {
                        amount: accountInfo.amount,
                        assets: assets,
                        nfts: accountInfo["created-assets"],
                        minimumBalance: accountInfo["min-balance"]
                    };
                    return [2 /*return*/, balances];
            }
        });
    });
}
var getPublicKey = function (priv) {
    var privateKeyString = buffer_1.Buffer.from(priv).toString("hex");
    var pub = ed25519_1.ed25519.getPublicKey(privateKeyString);
    return pub;
};
var createVault = function () { return __awaiter(void 0, void 0, void 0, function () {
    var account, keypair, privateKey, privateKeyString, vaultKey, linkvault, vault;
    return __generator(this, function (_a) {
        try {
            account = algosdk_1.default.generateAccount();
            keypair = account.sk;
            privateKey = keypair.slice(0, 32);
            privateKeyString = buffer_1.Buffer.from(privateKey).toString("hex");
            vaultKey = b58.encodeBase58(privateKeyString);
            linkvault = "".concat(vaultUrl).concat(vaultKey);
            vault = {
                address: account.addr,
                vault: linkvault
            };
            return [2 /*return*/, vault];
        }
        catch (error) {
            console.error(error);
        }
        return [2 /*return*/];
    });
}); };
exports.createVault = createVault;
var getVault = function (linkvault) { return __awaiter(void 0, void 0, void 0, function () {
    var vault, hex, hexBuffer, privateKey, publicKey, address, balances, wallet, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                vault = linkvault.replace(vaultUrl, "");
                hex = b58.decodeBase58(vault);
                hexBuffer = buffer_1.Buffer.from(hex, "hex");
                privateKey = new Uint8Array(hexBuffer);
                publicKey = getPublicKey(privateKey);
                address = algosdk_1.default.encodeAddress(publicKey);
                // const keypair = new Uint8Array([...privateKey, ...publicKey]);
                linkvault = "".concat(vaultUrl).concat(vault);
                return [4 /*yield*/, accountBalances(address)];
            case 1:
                balances = _a.sent();
                wallet = {
                    address: address,
                    linkvault: linkvault,
                    keypair: { privateKey: privateKey, publicKey: publicKey },
                    balances: balances
                };
                console.log(wallet);
                return [2 /*return*/, wallet];
            case 2:
                err_1 = _a.sent();
                console.error("Vault could not be resolved", err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getVault = getVault;
