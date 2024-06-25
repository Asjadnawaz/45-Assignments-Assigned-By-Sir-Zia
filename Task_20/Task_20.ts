/* Think of something you could store in a array. 
For example, you could make a list of mountains, rivers, countries, cities, languages, or 
anything else you’d like. Write a program that creates a list containing these items. */

let things: string[] = ["K-2", "England", "Indus River", "Karachi", "Pahsto"];

console.log(`\nList: `)

for ( let i = 0; i < things.length; i++) {
    console.log(things[i]);
}

