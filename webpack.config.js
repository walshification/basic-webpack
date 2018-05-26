const path = require('path');

const config = {
  entry: './src/index.js', // relative file path
  output: {
    path: path.resolve(__dirname, 'build'), // absolute file path
    filename: 'bundle.js',
  },
};

module.exports = config;
