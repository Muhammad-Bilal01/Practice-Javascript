// chapter 1

// alert("Thanks For Coming !");

// chapter 2
// Variables for String

// var myName = "Bilal";
// var myNationality = "Pakistan";

// alert(myName);
// alert(myNationality);

// let num1 = 10;
// let num2 = 5;
// let result;

// result = num1 + num2; // result = 15
// console.log(result);
// result = num1 - num2; // result = 5
// console.log(result);
// result = num1 * num2; // result = 50
// console.log(result);
// result = num1 / num2; // result = 2
// console.log(result);
// result = num1 % num2; // result = 0 (remainder of 10 / 5)
// console.log(result);
// num1++; // num1 is now 11
// console.log(result);
// num2--; // num2 is now 4
// console.log(result);

// chapter 12
// add plus operator before prompt method to convert string into Number
// var percentage = +prompt("Enter Percentage");
// if (percentage > 70) {
//   alert("Congratulations");
// }

// if (percentage <= 70) {
//   alert("need hard word");
// }

// var percentage = +prompt("Enter Percentage");
// if (percentage > 70) {
//   alert("Congratulations");
// } else {
//   alert("need hard word");
// }

// var percentage = +prompt("Enter Percentage");

// if (percentage >= 80) {
//   alert("A+");
// } else if (percentage >= 70) {
//   alert("A");
// } else if (percentage >= 60) {
//   alert("B");
// } else if (percentage >= 50) {
//   alert("C");
// } else {
//   alert("F");
// }

// var cities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];

// var cityToCheck = prompt("Enter city");
// cityToCheck = cityToCheck.toLowerCase(); // convert user String in lower case

// for (var i = 0; i < cities.length; i++) {
//   if (cityToCheck === cities[i]) {
//     alert(cityToCheck + " is the cleanest City");
//   }
// }

// var userCity = prompt("Enter City");
// var firstChar = userCity.slice(0, 1);
// firstChar = firstChar.toUpperCase();
// var otherChar = userCity.slice(1);
// otherChar = otherChar.toLowerCase();
// var titleCase = firstChar + otherChar;
// alert("userCity " + userCity + " to " + titleCase);

// var month = prompt("Enter Month");
// var monthChar = month.length;
// if (monthChar > 3) {
//   month = month.slice(0, 3);
// }

// alert(month);

// var text = prompt("Enter Some text");
// var textLength = text.length;

// for (var i = 0; i < textLength; i++) {
//   if (text.slice(i, i + 2) === "  ") {
//     alert("no double space allowed");
//   }
// }
