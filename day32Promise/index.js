// Promises Promises with Async, Await

// const promiseValue = new Promise((resolve, reject) => {
//   if (12 % 2 == 0) {
//     setTimeout(() => {
//       resolve("Even Number");
//     }, 2000);
//   } else {
//     reject("Odd Number");
//   }
// });

// promiseValue
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function print1() {
  try {
    const value = await new Promise((resolve, reject) => {
      if (12 % 2 == 0) {
        setTimeout(() => {
          resolve("Even Number");
        }, 2000);
      } else {
        reject("Odd Number");
      }
    });
    console.log(value);
  } catch (error) {
    console.log(error);
  }


}

function print2() {
  console.log("hello two");
}

print1();
print2();
