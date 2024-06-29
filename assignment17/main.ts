// assignment 17

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestList : string [] = ["Hammad","Umer","Noman","Ali","Hamza","Rafay"];

console.log("Unfortunately the new table won't available so we can only invit only two persons");

// Removing guests from the list
while(guestList.length > 2){
    let removedGuest : string | undefined = guestList.pop();
    if (removedGuest !== undefined ){
        console.log(`Sorry! ${removedGuest} we can't invite you`);
    }
}

// letting the two guests know tha they're still inivited
guestList.forEach(guestList => {
    console.log(`${guestList} you are still invited`);
})

// removing rest of the guests from the list 
guestList.splice(0,guestList.length);

console.log("Empty list of guests:", guestList);