// assignment 37

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string, message: string) {
    console.log(`The shirt size is ${size} and the message is ${message}`);
}
make_shirt("large","I love typeScript");
make_shirt("medium","I love typeScript");
make_shirt("small","I love typeScript");