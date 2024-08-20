import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log('Hello, ' + name);
}

function goodbyeHandler(name) {
  console.log('Goodbye, ' + name);
}

// Register event listeners
myEmitter.on('greet', greetHandler); // call greetHandler on 'greet' event
myEmitter.on('goodbye', goodbyeHandler);

// Emit events (trigger events)
myEmitter.emit('greet', 'John'); //
myEmitter.emit('goodbye', 'John');

// Error handling
myEmitter.on('error', (err) => {
  console.log('An error occurred: ', err);
});

// Simulate error
myEmitter.emit('error', new Error('Something went wrong'));
