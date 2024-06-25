/* Task 15 = Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think
 of someone else to invite.
• Start with your program from Exercise 14. Add a print statement 
at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with 
the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/


let people2: string[] = ["Asjad", "Ajwad", "Mahad"];

for (let i=0; i < people2.length; i++){
    console.log(`Dear ${people2[i]}! You are invited to the dinner`);
}

console.log((`
\nGuest Who can't make in it to the dinner:
`).toUpperCase());

let notAttend = people2[2];
console.log(`Dear ${notAttend}! you are not attend the dinner`);

console.log((`
Revised List:
`).toUpperCase());

let newguest = "Rab Nawaz"
people2[2] = newguest;

for (let j=0; j < people2.length; j++){
    console.log(`Dear ${people2[j]}! You are invited to the dinner`);
};
