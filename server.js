import http from 'http';
import fs from 'fs/promises';
import url from 'url'; // to set __filename
import path from 'path'; // to set __dirname

const PORT = process.env.PORT; // pulling from .env file

// GET current path
const __filename = url.fileURLToPath(import.meta.url); // turns file url to path
const __dirname = path.dirname(__filename); // gives dir of file without the file name
console.log(__filename, __dirname);

const server = http.createServer(async (req, res) => {
  // res.write('Hello world!');

  // res.setHeader('Content-Type', 'text/html');
  // res.statusCode = 404;
  //   console.log(req.url);
  //   console.log(req.method);
  try {
    // check if GET request
    if (req.method === 'GET') {
      let filePath;
      if (req.url === '/') {
        filePath = path.join(__dirname, 'public', 'index.html'); // take curr dir -> go into public folder -> load index.html
      } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'public', 'about.html'); // take curr dir -> go into public folder -> load about.html
      } else {
        throw new Error('Not Found');
      }
      const data = await fs.readFile(filePath); // await fs
      res.setHeader('Content-Type', 'text/html');
      res.write(data); // file contents
      res.end();
    } else {
      throw new Error('Method Not Allowed');
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' }); // status code & diff header vals
    res.end('Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
