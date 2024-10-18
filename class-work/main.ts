// Date 20-6-24
console.log("Order 1"); // print order 1       
setTimeout(() => {
    console.log("Order 2"); // wait order 3
}, 5000); // wait 5 sec
console.log("Order 3"); // print order 3

// Remove the previous declaration of firstfunc
let newFirstFunc = (cb1: string) => {
    console.log(cb1);
};

let helloWorld = () => {
    console.log("Hello World 2");
};

// print Hello 1 & Hello 2
newFirstFunc("Hello 1");
helloWorld();


let myPromise = new Promise((resolve, reject) => {
    resolve(4);
}).then((resp: any) => {
    console.log(resp);
    return resp * 3; // response0
}).then((resp1: any) => {
    console.log(resp1 * 1); // 12
    return resp1;
}).then((resp2: any) => {
    console.log(8); // 8
    return resp2;
}).then((resp3: any) => {
    console.log(3); // 3
});

