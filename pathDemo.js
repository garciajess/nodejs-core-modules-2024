import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

// basename() - returns last portion of a path
console.log(path.basename(filePath));

// dirname() - returns file path
console.log(path.dirname(filePath));

// extname() - returns extension
console.log(path.extname(filePath));

// parse() - returns object with all details (root, dir, base, ext, name)
console.log(path.parse(filePath));

// es modules
const __filename = url.fileURLToPath(import.meta.url); // import.meta gives file://
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

// join() - constructs file paths based on args passed in
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

// resolve() - like join() but creates absolute path
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);
