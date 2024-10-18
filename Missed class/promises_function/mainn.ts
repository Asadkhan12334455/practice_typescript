// function parentFunction(func: () => void){
//     console.log("Parent Function Called");
//     func();
// }

// function childFunction(){
//     console.log("Child Function Called");
// }

// parentFunction(childFunction);

// let washing: any = "Machine strted"
// let socking: any = ""
// async function runWashingMaching(){
//     try{
//         const result1 = await washing()
//         console.log(result1);
//         const result2 = await socking()
//         console.log(result2);
//         const result3 = await drying();
//         console.log(result3);
//         catch(error){
//             console.error(error);
//         } finally {
//             console.log("Washing Machine is stopped");
//         }
//     }
// }

// runWashingMaching();

// let throwing: any = () => {
//     throw new Error("An error occurred");
// }

// try{
//     throwing();
// } catch(error){
//     console.error(error);
//     console.log("An error occurred");
// }

let washing = function main(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve("Washing Machine is started");
            // reject("Washing Machine is stopped");

        }, 2000);
    });

}
