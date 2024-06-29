// assignment 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Create an array with the names of a few friends
const names: string[] = ["Umer","Ali","Hasan","Haris"];

// Method 1

console.log(`Hello, ${names [0]}! Hope you're doing great in your life`);
console.log(`Hello, ${names [1]}! Hope you're doing great in your life`);
console.log(`Hello, ${names [2]}! Hope you're doing great in your life`);
console.log(`Hello, ${names [3]}! Hope you're doing great in your life!`);

console.log("x--------------x-------------x");

// method 2 (FOR EACH)

names.forEach(names =>{
    console.log(`hello ${names}! Hope you're doing great in your life`);   
});
