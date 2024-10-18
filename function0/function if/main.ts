function isPrime (num: number, divisor:number = 2): boolean {
    if (num <= 2){
        return (num === 2)
    }
    //boolean condition
    //false
    if (num % divisor === 0) {
        return false
    }
    //true
    if (divisor * divisor > num){
        return true
    }
    //resrdive condition
    return isPrime(num , divisor + 1) 

}
const number:number = 17;
console.log(`${number} is prime number : ${isPrime(number)} `)

function addnum(x: number, y: number): number{
    return x + y
}
console.log(addnum(23,3));


function myFunction(a: string, b:string): string {
    return a + b 
}

console.log(myFunction("Hello", " World"));

function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

greet("John Doe");

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(3, 7));

function multiply(a: number, b: number): number {
    return a * b;
}

console.log(multiply(4, 6));

function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

console.log(divide(12, 3));

function squareRoot(a: number): number {
    if (a < 0) {
        throw new Error("Cannot calculate square root of a negative number");
    }
    return Math.sqrt(a);
}

console.log(squareRoot(25));

function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Cannot calculate factorial of a negative number");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

function fibonacci(n: number): number {
    if (n < 0) {
        throw new Error("Cannot calculate Fibonacci number of a negative number");
    }
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

function power(base: number, exponent: number): number {
    if (exponent < 0) {
        throw new Error("Exponent cannot be negative");
    }
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));

function fibonacciSum(n: number): number {
    if (n < 0) {
        throw new Error("Cannot calculate Fibonacci sum of a negative number");
    }
    if (n === 0) {
        return 0;
    }
    return fibonacci(n) + fibonacciSum(n - 1);
}

console.log(fibonacciSum(10));

function fibonacciSumEven(n: number): number {
    if (n < 0) {
        throw new Error("Cannot calculate Fibonacci sum of even numbers of a negative number");
    }
    if (n === 0) {
        return 0;
    }
    if (fibonacci(n) % 2 === 0) {
        return fibonacci(n) + fibonacciSumEven(n - 1);
    }
    return fibonacciSumEven(n - 1);
}

console.log(fibonacciSumEven(10));