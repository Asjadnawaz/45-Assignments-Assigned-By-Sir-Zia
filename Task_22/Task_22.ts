/* Intentional Error: If you haven’t received an array index error in one of your programs yet,
try to make one happen. Change an index in one of your programs to produce an index error. 
Make sure you correct the error before closing the program. */

let names1: string[] = ["Asjad", "Mahad", "Ajwad"];

try{
console.log(names1[0]);
console.log(names1[1]);
console.log(names1[2]);
console.log(names1[3]);
} catch(error) {
    console.error("Index Error: ", error);
}

//Error Corrected

console.log(names1[2]);
