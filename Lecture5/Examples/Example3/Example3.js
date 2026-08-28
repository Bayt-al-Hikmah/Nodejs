// Working with Timers

// Function run after a specified delay

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

// Repeats a function continuously at a fixed interval

let counter = 0;
const timer = setInterval(() => {
  counter++;
  console.log(`Tick ${counter}`);
  if (counter === 8) clearInterval(timer); 
}, 1000);