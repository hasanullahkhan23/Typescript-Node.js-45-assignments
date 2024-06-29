"use strict";
// Assignment 45
function createCar(manufacturer, model, options = {}) {
    return Object.assign({ manufacturer, model }, options);
}
// Calling the function with the required information and additional properties
const myCar = createCar("Toyota", "Corolla", { color: "Blue", optionalFeature: "Sunroof" });
// Print the object to verify all information is stored correctly
console.log(myCar);
