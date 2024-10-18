"use strict";
let a = 5;
let b = 2;
let logicalAnd = (a > 0) && (b > 0);
let logicalOr = (a < 0) || (b < 0);
let logicalNot = !(a > 0);
console.log(` ${logicalAnd} ${logicalNot} ${logicalOr}`);
