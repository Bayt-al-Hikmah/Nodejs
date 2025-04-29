const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter temperature in Celsius: ', (celsius) => {
    const fahrenheit = (parseFloat(celsius) * 9/5) + 32;
    console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
    readline.close();
  });