//OOP (object oriented programming)

// factory function

let obj = {
  name: "John",
  email: "john@example.com",
};

function user(userName, email, password) {
  return {
    userName,
    email,
    password,
    hello: function () {
      console.log(`Hello, my name is ${this.userName}`);
    },
  };
}

const johnUser = user("John", "john@example.com", "12345678");

console.log(johnUser);
johnUser.hello();

const bruceUser = user("Bruce", "bruce@example.com", "12345678");
console.log(bruceUser);

// constructor function  (new)

// construtor function name always start with capital letter

// in first step create a  object
// in second step  update object
// in third step object return
function Vehicle(vehicleName, type, year) {
  this.vehicleName = vehicleName;
  this.type = type;
  this.year = year;
  this.display = function () {
    console.log(
      ` Vehicle ${this.vehicleName} year ${this.year} type ${this.type}`
    );
  };
}

const audi = new Vehicle("audi", "car", "2014");
audi.display();
console.log(audi);

audi.vehicleName = "maruti";

console.log(audi);

function Account(userName, balance = 0) {
  this.userName = userName;
  this.balance = balance;
}

const bruceAccount = new Account("bruce", 2000);

bruceAccount.balance = "stole";
console.log(bruceAccount);
