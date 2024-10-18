// //Exam Practice 
// // Infering Type
// let message = "Hello World" 
// console.log(message); 

// //strongly typed syntax
// let a : string = "Pakistan"
// let b : number = 9;
// let c : boolean = true;

// //type inference
// let e = "USA"
// let f = 10.9;
// f = 22;
// let g = false;
// g = true;

// // If & Condition
// let Country: string = "Pakistan"
// if(Country === "Pakistan") {
//     console.log("Hello Pakistan")
// } else {
//     console.log("Hello World")
// }

// // Loop
// for(let i = 0; i < 5; i++) {
//     console.log("Looping", i)
// }

// // Function
// function greet(name: string) {
//     console.log("Hello", name)
// }
// greet("John")

// // anonymous Function
// let greetFunc = function(name: string) {
//     console.log("Hello", name)
// }
// greetFunc("Alice")

// // Aliased Object Type

// type Person = {
//     name: string,
//     age: number,
//     city: string
// }

// let person1: Person = {
//     name:"Asad",
//     age: 17,
//     city:"Karachi"
// }
// console.log(person1.name, person1.age, person1.city)

// // Function with Rest Parameter
// function addNumbers(...numbers: number[]): number {
//     let sum = 0;
//     for(let num of numbers) {
//         sum += num
//     }
//     return sum
// }
// // Arrow Function
// const greetArrow = (name: string) => console.log(`Hello ${name}`)
// greetArrow("Alice")

// // Array
// let fruits: string[] = ["Apple", "Banana", "Mango"]
// console.log(fruits)

// // Tuple
// let person2: [string, number, string] = ["John", 25, "New York"]
// console.log(person2[0], person2[1], person2[2])


// // Enum
// enum Color {Red, Green, Blue}
// let color: Color = Color.Red
// console.log(Color[color])

// // Object
// let person = {
//     name: "John",
//     age: 25,
//     city: "New York"
// }
// console.log(person.name, person.age, person.city)

// // Function with Return Type
// function addNumbers(a: number, b: number): number {
//     return a + b
// }
// console.log(addNumbers(5, 10))

// // Function with Optional Parameter
// function greetOptional(name?: string) {
//     if(name) {
//         console.log("Hello", name)
//     } else {
//         console.log("Hello World")
//     }
// }
// greetOptional("John")

// // Function with Rest Parameter
// function greetRest(...names: string[]) {
//     console.log("Hello", names.join(", "))
// }
// greetRest("John", "Alice", "Bob")

// // Function with Type Annotation
// function greetType(name: string): void {
//     console.log("Hello", name)
// }
// greetType("Muhammad Asad")

// // Function with Union Type

// function greetUnion(name: string | number): void {
//     if(typeof name === "string") {
//         console.log("Hello", name)
//     } else {
//         console.log("Hello", name.toString())
//     }
// }
// greetUnion("Muhammad Asad")
// greetUnion(25)

// //explict_casting

// let anyValue: any = "Hello World"
// let stringValue: string = anyValue as string
// console.log(stringValue)


// let dayOfWeek: string ="Thursday"
// switch(dayOfWeek){
//     case "Thursday":
//         console.log("Go to the Governor House");
//         break
//     case"Monday":
//         console.log("Resd a book");
//     default:
//     console.log("Make a typesript program");        
// }

// let arr = ["Hello", 12, true]
// arr[0] = false
// arr[1] = "Asad"
// // arr = [30, false, "Muneeb"] 

// console.log(arr);


// let tup: [string, number, boolean] = ["Hello", 12, true]
// tup.unshift = [2]

// console.log(tup);


// let isCompleted: boolean = false; 
// isCompleted = true; 
// console.log(isCompleted);

// function greet(name: string = "Guest"): string {
//     return `Hello, ${name}`;
// }
// console.log(greet());
// console.log(greet("Alice"));

let myname:any = 3
while (myname > 0) {
    console.log(myname);
    
}