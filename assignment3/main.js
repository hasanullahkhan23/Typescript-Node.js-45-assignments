"use strict";
// asssignment 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName2 = "Hasan Ullah Khan";
//Lower case
console.log(personName2.toLowerCase());
//Upper case
console.log(personName2.toUpperCase());
//Title case
console.log(personName2.replace(/\b\w/g, c => c.toUpperCase()));
