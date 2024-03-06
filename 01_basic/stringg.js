const name="yashwind";
const age="23";
console.log(`hello my name is ${name} and my age is${age}`);  //this is called as string interpolation


console.log(name.length);

console.log(name.toUpperCase());
console.log(name.charAt(2));
const newString=name.substring(0,4);
//console.log(newString);

const anotherString=name.slice(-5,-2);
console.log(anotherString);

const neString2=" histhesh ";
console.log(neString2);
console.log(neString2.trim());

const url="https://hitesh.com/hitesh%20chouwdary";
console.log(url.replace("%20",'-'));

console.log(url.includes('hitesh')); //to check htesh included in the url
console.log(url.includes('sundar')); 