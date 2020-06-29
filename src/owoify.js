const owoify = require('owoify-js');

if (process.argv.length < 3) {
  console.log('Nope');
  return process.exit(-1);
}

console.log(owoify.default(process.argv[3], process.argv[2]));
