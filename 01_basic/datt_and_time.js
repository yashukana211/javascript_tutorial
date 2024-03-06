let myDate=new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toString());

let myCreatedDate=new Date("03-06-2024");
console.log(myCreatedDate.toDateString());  //date is object data type;
console.log(myDate.toLocaleString());
let myTimespam=Date.now();
console.log(myTimespam);

let currentDate = new Date();

// Format the date and time in Indian format
let options = { timeZone: 'Asia/Kolkata',
                 weekDay:'long'
 };
let indianFormat = currentDate.toLocaleString('en-IN',options);

console.log(indianFormat);




