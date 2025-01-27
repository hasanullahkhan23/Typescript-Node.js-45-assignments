// assignment 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames: string[] = ["admin", "Ali", "Ahmad", "Sami", "Fahad"];

// Condition 01 

if (userNames.length === 0) {
  console.log("We need to find some users!");
} else {
  userNames.forEach(user => {
    if (user.includes("admin")) {
      console.log(`Hello ${user} , would you like to see a status report?`);
    } else {
      console.log(`Hello ${user}, thank you for logging in again.`);
    }
  }
  )
}

// Condition 02
console.log("-----Conditon 02-----");

userNames = [];

if (userNames.length === 0) {
  console.log("We need to find some users!");
} else {
  userNames.forEach(user => {
    if (user.includes("admin")) {
      console.log(`Hello ${user} , would you like to see a status report?`);
    } else {
      console.log(`Hello ${user}, thank you for logging in again.`);
    }
  })
}