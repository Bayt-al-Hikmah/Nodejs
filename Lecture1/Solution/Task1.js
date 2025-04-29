const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter the radius of the circle: ', (radius) => {
    const area = Math.PI * Math.pow(parseFloat(radius), 2);
    console.log(`Surface area: ${area.toFixed(2)}`);
    readline.close();
  });
