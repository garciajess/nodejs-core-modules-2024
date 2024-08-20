import url from 'url';

const urlString = 'http://www.google.com/search?q=hello+world';

// URL object
const urlObj = new URL(urlString);
console.log(urlObj);

// format() - puts object back into string form
console.log(url.format(urlObj));

// import.meta.url - gives file protocol and path
console.log(import.meta.url);

// fileURLToPath() - converts to regular path
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);
const params = new URLSearchParams(urlObj.search); // gives object of search params
console.log(params);
console.log(params.get('q')); // get param value
params.append('limit', '5');
console.log(params);
