const path = require('path');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './src/owoify.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'owoify.bundle.js',
  },
};
