// Object with Array Objects Looping Array with object access with looping and conditions Make Quotes

let arrValue = [1,2,3,4];

//spread
let arrValue2 = [5,6,7,7,...arrValue]

console.log(arrValue2)


let employeeDetails = ["Rahul", 25, "delhi", "google"];
let employeeSubjects = ["computerScience", "react", "javascript"];
let employeeMarks = [22, 33, 44];

let obj = {
  name: "Rahul",
  address: "delhi",
  organination: "google",
  subject: ["computerScience", "react", "javascript"],
  extraSubject: { subject: "html" },
};

obj.name = "ash";
console.log(obj);
console.log(typeof obj);
console.log(obj["names"],"names"); //bracket notation
console.log(obj.name); //dot notation
console.log(obj.subject[2]);

obj.marksheets = [22, 33, 44];

obj.newEmployee = { name: "" };
console.log(obj, "extra");
console.log(obj);
console.log(obj.extraSubject.subject);
// for(let key in obj){
//   console.log(key,obj[key])
// }

let arr2 = [
  {
    name: "Rahul",
    address: "delhi",
    organination: "google",
    subject: ["computerScience", "react", "javascript"],
    extraSubject: { subject: "html" },
  },
  
  {
    name: "harsh",
    address: "delhi",
    organisation: "google",
    subject: ["computerScience", "react", "javascript"],
    extraSubject: { subject: "html" },
  },
  {
    name: "gaurv",
    address: "delhi",
    organisation: "google",
    subject: ["computerScience", "react", "javascript"],
    extraSubject: { subject: "html" },
  },
];


delete obj.address // delete

console.log(obj, "delete");

console.log(Object.keys(obj),"key")
console.log(Object.values(obj),"value")

console.log(typeof null ,"null")

// console.log([1,2,3] == "1,2,3")

let matrix = [[1,2,3],
              [4,5,6],
              [7,8,9]]
 console.log(matrix[1][1])

console.log(matrix)



