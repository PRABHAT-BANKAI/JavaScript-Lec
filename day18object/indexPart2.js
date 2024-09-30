let obj = {};

let details = {
  name: "shubham",
  age: 20,
  subject: { HTML: "12", CSS: "44", JavaScript: "55" },

  print: function (x, y) {
    // console.log("Hello world")
    // console.log(name);
    console.log(this.subject,"subject")
 return x + y;
  },

  print:function(){
  return  this.name
  }
};

// details.name = "prabhat";

console.log(details);

console.log(details.print());


// dot notation
// bracket notation

let arr = ["HTML", "CSS", "JavaScript",]
let sum = 0
for(let i=0;i<arr.length;i++){
sum += Number(details.subject[arr[i]])
}

console.log(sum,"sum");


for(let key in details){
  // console.log(key)
  console.log(details.name,"name")
  console.log(details[key])
}

