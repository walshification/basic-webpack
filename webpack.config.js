const path = require('path');

const config = {
  entry: './src/index.js', // relative file path
  output: {
    path: path.resolve(__dirname, 'build'), // absolute file path
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader', // loader to apply for the rule
        test: /\.js$/, // pattern matching for the files this rule applies to
      },
    ],
  },
};

module.exports = config;
