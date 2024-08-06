let userFirstName = "John";
let userLastName = "Doe";
let itemPrice = 19.90;
let salesTax = 0.20;
let totalPrice = itemPrice + (itemPrice * salesTax);
console.log("Total Price:", totalPrice);

let y = 5;
let z = 10;
let x = y + z;
console.log("Sum of y and z:", x);

const myArray = ["Volvo", "Saab", "Fiat"];
console.log("Car brands:", myArray);

function convertToCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
console.log("Celsius:", convertToCelsius(32));

let time = 18;
let greeting;
if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log("Greeting:", greeting);

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log("User Info:", user);

function add() {
  let localX = 10;
  localX += 5;
  console.log("Local X after addition:", localX);
}
add();

const car = { type: "Fiat", model: "500", color: "white" };
console.log("Car Info:", car);

let str = "Hello";
let num = 5;
console.log("String:", str);
console.log("Number:", num);

let comparisonResult = (0 === "");
console.log("Comparison of 0 === '':", comparisonResult);

function calculateDiscount(price, discount = 0) {
  return price - (price * discount);
}
console.log("Discounted Price:", calculateDiscount(100, 0.15));

let day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Tuesday":
    console.log("Second day of the work week");
    break;
  default:
    console.log("Invalid day");
}

let result = Number("5") + 3;
console.log("Result of Number('5') + 3:", result);