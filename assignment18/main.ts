// assignmet 18

// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let placesToVisit : string [] = ["Paris","New York","Sydney","London","Istanbul"];
// original order
console.log("Original order:", placesToVisit);

// alphabetical order
console.log("Alphabetical order:", placesToVisit.slice().sort());

// array is still in its original order
console.log("Original order after sorting:", placesToVisit);

// reverse order
console.log("Reverse alphabetical order:", placesToVisit.slice().sort().reverse());

// array is still in its original order
console.log("Original order after reverse sorting:", placesToVisit);

// reversing the order of list
placesToVisit.reverse();
console.log("Reverse order:", placesToVisit );

// reversing the order of list again
console.log("Reverse order:", placesToVisit.reverse());

// Sorting array in alphabetical order
console.log("Sorting in Alphabetical order", placesToVisit.sort()); //

// Sorting array in reverse alphabetical order
console.log("Reverse alphabetical order", placesToVisit.sort().reverse());