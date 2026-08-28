// Working with module


// Working with third party packages


// - Start project with: npm init -y
// - install the package using npm install


// require the installed package

// use the installed package
const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });