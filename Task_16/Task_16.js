"use strict";
/* Task 16 = More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15.
Add a print statement to the end of your program informing
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
let guests = ["Asjad", "Ajwad", "Rab Nawaz"];
for (let j = 0; j < guests.length; j++) {
    console.log(`Dear ${guests[j]}! You are invited to the dinner`);
}
;
console.log(`\n---Bigger Table invitations--`);
for (let k = 0; k < guests.length; k++) {
    console.log(`Dear ${guests[k]}! We have found a bigger table for dinner`);
}
guests.unshift("Ali");
guests.splice(3, 0, "Raheel");
guests.push("Jawad");
console.log(`\n---New Set of inviatations--- `);
for (let y = 0; y < guests.length; y++) {
    console.log(`Dear ${guests[y]}! You are invited to the dinner`);
}
