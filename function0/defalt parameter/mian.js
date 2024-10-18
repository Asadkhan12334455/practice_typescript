// function halfFryEgg(
//     egg:number = 1,  butter: number = 1.5, salt:number = 2
// ): number {
//     return egg + butter + salt
// }
// let response: number = halfFryEgg()
// console.log(response);
function halfFryEgg(egg, butter, salt) {
    if (egg === void 0) { egg = 1; }
    if (butter === void 0) { butter = 1.5; }
    if (salt === void 0) { salt = 2; }
    return egg + butter + salt;
}
var response = halfFryEgg(1, 1.5, 3);
console.log(response);
