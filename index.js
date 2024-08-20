// common js
// const { generateRandomNumber, celciustoFahrenheit } = require('./utils');
// console.log(`Random Number: ${generateRandomNumber()}`);
// console.log(`Celcius To Fahrenheit: ${celciustoFahrenheit(0)}`);

// es modules:
// import { getPosts } from './postController.js';
// console.log(getPosts());

// getPosts imported as default
import getPosts, { getPostsLength } from './postController.js';
console.log(`Posts Length: ${getPostsLength()}`);
