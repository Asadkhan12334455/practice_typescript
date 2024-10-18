function parentFunction(func) {
    console.log("Parent Function Called");
    func();
}
function childFunction() {
    console.log("Child Function Called");
}
parentFunction(childFunction);
export {};
