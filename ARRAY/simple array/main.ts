//Example: Array Declaration and Initialization 
let fruits: Array<string>;
fruits = ['Apple', 'Orange', 'Banana']; 

let ids: Array<number>;
ids = [23, 34, 100, 124, 44]; 
console.log(fruits);
console.log(ids);

//Example: Array Length

console.log(fruits.length); // Output: 3
console.log(ids.length); // Output: 5

//Example: Adding Elements to the Array

fruits.push('Grape'); // Add 'Grape' to the end of the array
console.log(fruits); // Output: ['Apple', 'Orange', 'Banana', 'Grape']

ids.push(55); // Add 55 to the end of the array
console.log(ids); // Output: [23, 34, 100, 124, 44, 55]

//Example: Accessing Elements by Index

console.log(fruits[1]); // Output: Orange
console.log(ids[4]); // Output: 44

//Example: Modifying Elements by Index

fruits[1] = 'Pineapple'; // Change 'Orange' to 'Pineapple' at index 1
console.log(fruits); // Output: ['Apple', 'Pineapple', 'Banana', 'Grape']

ids[4] = 1000; // Change 44 to 1000 at index 4
console.log(ids); // Output: [23, 34, 100, 124, 1000, 55]

//Example: Removing Elements from the Array

fruits.pop(); // Remove the last element from the array
console.log(fruits); // Output: ['Apple', 'Pineapple', 'Banana']

ids.shift(); // Remove the first element from the array
console.log(ids); // Output: [34, 100, 124, 1000, 55]

//Example: Searching for an Element

console.log(fruits.indexOf('Banana')); // Output: 2
console.log(ids.indexOf(100)); // Output: 2

//Example: Sorting Arrays

fruits.sort(); // Sort the array in ascending order
console.log(fruits); // Output: ['Apple', 'Banana', 'Pineapple']

ids.sort((a, b) => b - a); // Sort the array in descending order
console.log(ids); // Output: [1000, 124, 100, 55, 34]