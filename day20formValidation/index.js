//form validation
// JS Form Validation name , password , date , hobby , email , gender
// +

// console.log(1 + + "1 3")


let nameValue = "Bruce"
let password= "123"
let date = "121212"
let hobby = "tabletennis"
let email = "asd@gmail.com"
let gender = "male"


function validation(){

  if(nameValue== "" || password=="" || date=="" || hobby=="" || email=="" || gender==""){

  console.log("please fill you credentials")
  }else{
    console.log("Successfull")
  }

}

validation()

// try{
//   if(4>7){
//     console.log("this is true")
//   }else{
//     console.log("this is false")
//     // throw "is not greater than"
//   }

// }catch(error){
//   console.log(error)
// }

// console.log("end")