// import fs from 'fs';
import fs from 'fs/promises';

// readFile() - callback (asynchronous)
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFile() - synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

// readFile() - promise .then()
// fs.readFile('./test.txt', 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile() - async/await (preferred)
const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writeFile() - async/await (preferred)
const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'Writing to file!');
    console.log('File written to.');
  } catch (error) {
    console.log(error);
  }
};

// appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile('./test.txt', '\nThis is appended text');
    console.log('File appended to!');
  } catch (error) {
    console.log(error);
  }
};

// wrap calls in a function & use await to ensure they run sequentially.
// writeFile completes before appendFile starts, & appendFile completes before readFile starts
const executeFileOperations = async () => {
  await writeFile();
  await appendFile();
  await readFile();
};

executeFileOperations();
