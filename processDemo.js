// argv
console.log(process.argv);
console.log(process.argv[2]);

// process.env
console.log(process.env);

// pid
console.log(process.pid);

// current working directory
console.log(process.cwd());

// title of nodejs process
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// uptime()
console.log(process.uptime());

// process event listener
process.on('exit', (code) => {
  // listen for exit event
  console.log(`About to exit with code ${code}`);
});

// exit() - triggers event listener above
process.exit(0); // success
// process.exit(1); // general error
console.log('Hello from after exit');
