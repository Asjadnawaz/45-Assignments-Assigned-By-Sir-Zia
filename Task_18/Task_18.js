"use strict";
/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.*/
let locations = ["India", "England", "New York", "Islamabad", "Gigit Baltistan"];
// • Print your array in its original order.
console.log("Orignal Order: ", locations);
// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order: ", [...locations].sort());
// • Show that your array is still in its original order by printing it.
console.log("Orignal Order: ", locations);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order: ", [...locations].sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("Orignal Order: ", locations);
// • Reverse the order of your list. Print the array to show that its order has changed.
locations.reverse();
console.log("Reversed Orignal List: ", locations);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
locations.reverse();
console.log("Orignal Order List: ", locations);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
locations.sort();
console.log("Orignal Alphabetical Order List: ", locations);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
locations.sort().reverse();
console.log("Reversed Alphabetical Order Orignal List: ", locations);
