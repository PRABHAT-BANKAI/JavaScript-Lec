let count = 0;

const timerId = setInterval(() => {
  console.log(++count);
  if (count == 5) {
    clearInterval(timerId);
    console.log("Timer stopped");
  }
}, 1000);
