"use strict";
// assignment 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//•  Tests for equality and inequality with strings
//•  Tests using the lower case function
//•  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//•  Tests using "and" and "or" operators
//•  Test whether an item is in a array
//•  Test whether an item is not in a array
console.log("-----Test01-----");
// 01
// Equality and inequality with strings
let fruit = "mango";
console.log("Is fruit == mango ? I predit true");
console.log(fruit == "mango");
console.log("Is fruit != mango ? I predict false");
console.log(fruit != "mango");
console.log("-----Test 02-----");
// 02
// Lower case function
let bike = "YAMAHA";
console.log("Is bike.toLowerCase == yamaha ? I predict true");
;
console.log(bike.toLowerCase() == "yamaha");
console.log("Is bike.toLowerCase != yamaha ? I predict false");
;
console.log(bike.toLowerCase() != "yamaha");
console.log("-----Test03-----");
// 03  Numerical tests
// Equality and inequality
let number1 = 10;
let number2 = 20;
console.log("Is number1 == number2 ? I predict false");
console.log(number1 == number2);
console.log("Is number1 != number2 ? I predict true");
console.log(number1 != number2);
console.log("---------------");
// Greater than and less than
console.log("Is number1 < number2 ? I predict true");
console.log(number1 < number2);
console.log("Is number1 > number2 ? I predict false");
console.log(number1 > number2);
console.log("---------------");
// Greater than or equal to
console.log("Is number2 >= number1 ? I predict true");
console.log(number2 >= number1);
// Less than or equal to
console.log("Is number2 <= number1 ? I predict false");
console.log(number2 <= number1);
console.log("-----Test04-----");
// 04
// Using "and" and "or" operators
let age1 = 5;
let age2 = 10;
// And operator (&&)
console.log("Is age1 < age2 && age1 != age2 ? I predict true");
console.log(age1 < age2 && age1 != age2);
// Or operator (||)
console.log("Is age1 > age2 || age1 == age2 ? I predict false");
console.log(age1 > age2 || age1 == age2);
console.log("-----Test05-----");
// 05
// An item is in a array
let fruits = ["mango", "banana", "apple", "orange"];
console.log("Is banana in an array ? I predict true");
console.log(fruits.includes("banana"));
console.log("-----TEst06-----");
// 06
// An item is not in a array
console.log("Is pineapple in an array ? I predict false");
console.log(fruits.includes("pineapple"));
