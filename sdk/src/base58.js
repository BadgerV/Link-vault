"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var B58 = /** @class */ (function () {
    function B58() {
        this.BASE58_ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    }
    B58.prototype.encodeBase58 = function (input) {
        var result = [];
        var base = BigInt(this.BASE58_ALPHABET.length);
        var value = BigInt("0x" + input);
        while (value > BigInt(0)) {
            var remainder = value % base;
            result.unshift(this.BASE58_ALPHABET[Number(remainder)]);
            value = value / base;
        }
        // Convert leading zeros to '1's
        var leadingZeros = input.match(/^0+/);
        if (leadingZeros) {
            for (var i = 0; i < leadingZeros[0].length; i++) {
                result.unshift(this.BASE58_ALPHABET[0]);
            }
        }
        return result.join("");
    };
    B58.prototype.decodeBase58 = function (input) {
        var result = BigInt(0);
        var base = BigInt(this.BASE58_ALPHABET.length);
        var inputChars = input.split("");
        for (var _i = 0, inputChars_1 = inputChars; _i < inputChars_1.length; _i++) {
            var char = inputChars_1[_i];
            result = result * base + BigInt(this.BASE58_ALPHABET.indexOf(char));
        }
        // Convert the result to a hexadecimal string
        return result.toString(16);
    };
    return B58;
}());
exports.default = B58;
