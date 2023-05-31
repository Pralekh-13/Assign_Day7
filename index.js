let num=16;

console.log("Square root of",num,'=',Math.sqrt(num));

let randomNum = Math.round(Math.random() * 10);
console.log("Random number:", randomNum);

let today = new Date();
console.log("Current date and time:", today);

let year = today.getFullYear();
let month = today.getMonth() + 1;
let dayOfMonth = today.getDate();
let dayOfWeek = today.getDay();

console.log("Year:", year);
console.log("Month :", month);
console.log("Day of the month:", dayOfMonth);
console.log("Day of the week :", dayOfWeek);

today.setFullYear(2022);
today.setMonth(11);
today.setDate(31);

let updatedYear = today.getFullYear();
let updatedMonth = today.getMonth() + 1; 
let updatedDayOfMonth = today.getDate();

console.log("Updated Year:", updatedYear);
console.log("Updated Month :", updatedMonth);
console.log("Updated Day of the month:", updatedDayOfMonth);

let birthday = new Date(1995, 4, 13); 

let millisecondsDiff = today.getTime() - birthday.getTime();
console.log("Milliseconds difference:", millisecondsDiff);

let daysDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));
console.log("Days difference:", daysDiff);