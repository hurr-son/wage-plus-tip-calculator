const wageInput = document.getElementById("wageInput");
const tipInput = document.getElementById("tipInput");
const hoursInput = document.getElementById("hoursInput");
const calcBtn = document.getElementById("calcBtn");
const displayWage = document.querySelector(".display-wage");



const formatter =
new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

let wage = 14.50;
let tips = 20;
let hours = 7.25;



function calculateRealWage(wage, tips, hours) {
     let realWage = formatter.format(((wage * hours) + tips) / hours);
     return realWage
}

console.log(calculateRealWage(wage, tips, hours))