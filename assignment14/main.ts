// assignment 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner

let guestList : string [] = ["Hasan","Ali","Umer"];

// METHOD 1

console.log(`Dear ${guestList[0]}! you are invited for a dinner`);
console.log(`Dear ${guestList[1]}! you are invited for a dinner`);
console.log(`Dear ${guestList[2]}! you are invited for a dinner`);

console.log("x--------x---------x");

// METHOD 2

guestList.forEach( guests => {
    console.log(`Dear ${guests}! you are invited for a dinner`); 
})