"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateArea = void 0;
function calculateArea(width, hight) {
    return width * hight;
}
exports.calculateArea = calculateArea;
var response = calculateArea(1000, 50);
console.log(response);
