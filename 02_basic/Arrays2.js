//Array2

let marvels_hero=["thor","ironman","spiderman"];
let dc=["superman","ironman","spiderman"];

// marvels_hero.push(dc);
// console.log(marvels_hero);
// console.log(marvels_hero[3][1]);

let a=marvels_hero.concat(dc);
console.log(a);

//spread method
let all_new_heros=[...marvels_hero,...dc];
console.log(all_new_heros)

let another_way=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(another_way);

let real_another_way=another_way.flat(2) //we can give infinit to remove all brackets inside the list
console.log(real_another_way);

console.log(Array.isArray(marvels_hero)) //checking is array or not
console.log(Array.from("hitesh"));

//creating arrray from set of variable
//example
let score1=100
let score2=200
let score3=300

let new_arrray=Array.of(score1,score2,score3);
console.log(new_arrray);





