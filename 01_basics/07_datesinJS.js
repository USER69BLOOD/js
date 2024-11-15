// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

let myCreatedDate = new Date(2024, 11, 25, 13, 30); // 11 - December Months starts from 0 - january
console.log(myCreatedDate.toLocaleString());

let anotherCreatedDate = new Date("2024-12-25");
console.log(anotherCreatedDate);

                             // ms - milisecond
let myTimeSTamp = Date.now();
console.log(myTimeSTamp); //value in ms from 1-jan-1970

console.log(anotherCreatedDate.getTime()) // value in ms from 1-jan-1970 to the specified date ("2024-12-25")

console.log(Math.round(Date.now() / 1000)) // conversion ms -> s and using round to aviod getting Decimal Values (.)

let newDate = new Date();
console.log(newDate.getMonth() + 1); // Month counting Starts from 0
console.log(newDate.getDay()); // Starts from Monday

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    hour:"2-digit"
})) // Cusomize