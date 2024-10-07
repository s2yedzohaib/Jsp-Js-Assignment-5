// // chp DATE METHODS

// // q1

// // const newdate = new Date();
// // const formattedDate = newdate.toLocaleString();

// // console.log("Current Date and Time:", formattedDate);
// // q1
// // q2
// // const newdate = new Date();
// // const monthIndex = newdate.getMonth();
// // const monthName = [
// //   "January", "February", "March", "April", "May", "June",
// //   "July", "August", "September", "October", "November", "December"
// // ];
// // const currentMonth = monthNames[monthIndex];

// // alert("Current Month:", currentMonth);
// // q2
// // q3
// // const newdate = new Date();
// // const dayOfWeek = newdate.getDay();
// // const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// // const currentDay = dayNames[dayOfWeek].substring(0, 3);

// // alert("Today is", currentDay);
// // q3
// // q4
// // const curdate = new Date();
// // const dayOfWeek = curdate.getDay();

// // if (dayOfWeek === 0 || dayOfWeek === 6) {
// //   alert("Its fuun day!");
// // }
// // q4
// // q5

// const curdate = new Date();
// const currentDay = curdate.getDate();

// if (currentDay <= 15) {
//   console.log("First fifteen days of the month");
// } else {
//   console.log("Last days of the month");
// }

// // q5
// // q6

// const myDate = new Date();
// const ssd = myDate.getTime();
// const elapsedMinutes = ssd / 60000;

// console.log("Elapsed minutes since January 1, 1970:", elapsedMinutes);

// // q6
// // q7

// const hours = curdate.getHours();

// if (hours < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }
// // q7   
// // q8

// const laterDate = new Date(2020, 11, 31); // December 31, 2020

// console.log("Later date:", laterDate.toLocaleString());

// // q8
// // q9

// const firstRamadan = new Date(2015, 5, 18); // June 18, 2015
// const curdate = new Date();
// const millisecondsDifference = curdate - firstRamadan;
// const daysPassed = Math.floor(millisecondsDifference / (1000 * 60 * 60 * 24));

// alert(`${daysPassed} days have passed since 1st Ramadan, 2015`);

// // q9
// // q10

// const referenceDate = new Date("Sat Dec 05 2015 22:50:16 GMT+0500 (PKT)");
// const beginningOf2015 = new Date(2015, 0, 1);
// const secondsDifference = (referenceDate - beginningOf2015) / 1000;

// console.log(`On reference date ${referenceDate.toLocaleString()}, ${secondsDifference} seconds had passed since beginning of 2015`);

// // q10
// // q11

// const curdate = new Date();
// const currentHours = curdate.getHours();
// curdate.setHours(currentHours + 1);

// console.log("Current date:", curdate.toLocaleString());

// // q11
// // q12

// const curdate = new Date();
// const currentYear = curdate.getFullYear();
// curdate.setFullYear(currentYear - 100);

// alert("100 years back, it was " + curdate.toLocaleString());

// // q12
// // q13

// const userAge = prompt("Enter your age:");
// const currentYear = new Date().getFullYear();
// const birthYear = currentYear - userAge;

// console.log("Your birth year is: " + birthYear);
// // q13
// // q14
// // 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:

// // a. Customer Name
// // const customerName = "Your Name";

// // // b. Current Month
// // const curdate = new Date();
// // const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// // const currentMonth = monthNames[curdate.getMonth()];

// // // c. Number of units
// // const numberOfUnits = 100; // Replace with the actual number of units consumed

// // // d. Charges per unit
// // const chargesPerUnit = 15.00; // Replace with the actual charges per unit

// // // e. Net Amount Payable (within Due Date)
// // const netAmountPayableWithinDueDate = numberOfUnits * chargesPerUnit;
// // const formattedNetAmountWithinDueDate = netAmountPayableWithinDueDate.toFixed(2);

// // // f. Late Payment Surcharge
// // const latePaymentSurcharge = 10.00; // Replace with the actual late payment surcharge

// // // g. Gross Amount Payable (after Due Date)
// // const grossAmountPayableAfterDueDate = netAmountPayableWithinDueDate + latePaymentSurcharge;
// // const gfs = grossAmountPayableAfterDueDate.toFixed(2);

// // // Display the bill information
// // console.log("K-Electric Bill");
// // console.log("----------------");
// // console.log("Customer Name:", customerName);
// // console.log("Current Month:", currentMonth);
// // console.log("Number of units:", numberOfUnits);
// // console.log("Charges per unit:", chargesPerUnit.toFixed(2));
// // console.log("Net Amount Payable (within Due Date):", formattedNetAmountWithinDueDate);
// // console.log("Late Payment Surcharge:", latePaymentSurcharge.toFixed(2));
// // console.log("Gross Amount Payable (after Due Date):", gfs);
// // q14
