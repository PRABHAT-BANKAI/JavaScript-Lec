// use both logical operator && ||
// output question "contcatination" and "prefix postfix"

// if else if (decending )
// switch case and default
// real life example

// console.log("45" + 1 + 1 + 1);
// console.log(!true + 5 - !false);

// console.log(44 && 0 && 2);
// console.log(0 || 23);
// console.log(5 > 2 || 6 < 3 || true || !true || (0 && 4 > 1));

// let trafficLight = "orange";

// if (trafficLight == "red") {
//   console.log("Stop");
// } else if (trafficLight == "orange") {
//   console.log("Be ready");
// } else if (trafficLight == "green") {
//   console.log("Go");
// }else{
//   console.log("color is not match for traffic light")
// }

let budget = 1500;

if (budget >= 5000) {
  console.log("Dominos");
} else if (budget >= 4000) {
  console.log("Mcdonald");
} else if (budget > 3000) {
  console.log("Burger King");
} else if (budget >= 1500) {
  console.log("pao  Baaji");
} else if (budget == 1500) {
  console.log("Dhaba");
} else {
  console.log("ghar betho");
}
// let value = 0;
// console.log(value++);
// console.log(value);
// console.log(++value);

let number = -1;
switch (number) {
  case number > 0:
    console.log(number);
    break;

  case number == 0:
    console.log("number equals 0");
    break;
}

let small = Infinity;
let max = -Infinity;

let number1 = 5;

if (number1 < small) {
  small = number1;
}

if (number1 > max) {
  max = number1;
}
