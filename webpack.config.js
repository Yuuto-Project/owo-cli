const path = require('path');

module.exports = (env) => {
  return {
    target: 'node',
    mode: env.MODE,
    entry: './src/owoify.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'owoify.bundle.js',
    },
  };
};
