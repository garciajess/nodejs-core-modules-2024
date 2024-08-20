import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Jim Doe' },
];

// logger middleware (logs url & method when request is made)
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// json middleware (logs url & method when request is made)
const jsonMiddleware = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
};

// route handler for GET /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split('/')[3]; // should be 3rd one
  const user = users.find((user) => user.id === parseInt(id));
  res.write(JSON.stringify(user));
  if (user) {
    // user exists
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'User Not Found' }));
  }
  res.end();
};

// not found handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: 'Route Not Found' }));
  res.end();
};

// route handler for POST /api/users
const createUserHandler = (req, res) => {
  let body = '';
  // listen for event data
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  // listen for event end
  req.on('end', (chunk) => {
    const newUser = JSON.parse(body); // turn JSON to reg JS object
    users.push(newUser);
    res.statusCode = 200;
    res.write(JSON.stringify(newUser)); // turn JS object to JSON
    res.end();
  });
};

// clean up: middleware & handlers
const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === '/api/users' && req.method === 'GET') {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === 'GET'
      ) {
        getUserByIdHandler(req, res);
      } else if (req.url === '/api/users' && req.method === 'POST') {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

// const server = createServer((req, res) => {
//   logger(req, res, () => {
//     if (req.url === '/api/users' && req.method === 'GET') {
//     } else if (
//       req.url.match(/\/api\/users\/([0-9]+)/) &&
//       req.method === 'GET'
//     ) {
//       const id = req.url.split('/')[3]; // should be 3rd one
//       const user = users.find((user) => user.id === parseInt(id));
//       res.setHeader('Content-Type', 'application/json');
//       if (user) {
//         // user exists
//         res.write(JSON.stringify(user));
//       } else {
//         res.statusCode = 404;
//         res.write(JSON.stringify({ message: 'User Not Found' }));
//       }
//       res.end();
//     } else {
//       res.setHeader('Content-Type', 'application/json');
//       res.statusCode = 404;
//       res.write(JSON.stringify({ message: 'Route Not Found' }));
//       res.end();
//     }
//   });
// });

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
