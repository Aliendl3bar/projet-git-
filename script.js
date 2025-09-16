let number1 = 5;
let number2 = 10;
let sum = number1 + number2;
console.log("The sum is: " + sum);

function  addition(a, b) {
    return a + b;
}
let sum2 = addition(3, 7);
console.log("The sum is: " + sum2);

let age = 20;
if (age > 18) {
    console.log("You are an adult."+age);
} else if (age === 18) {
    console.log("You are just an adult."+age);
} else {
    console.log("You are a minor."+age);
}
for (let i = 1; i <= 10; i++) {
    if (i === 5)  continue;
    console.log("Number: " + i);
}