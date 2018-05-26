const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js', // relative file path
  output: {
    path: path.resolve(__dirname, 'build'), // absolute file path
    filename: 'bundle.js',
    publicPath: 'build/', // prepended to URLs loaded by the file-loader used by url-loader
  },
  module: {
    rules: [
      {
        use: 'babel-loader', // loader to apply for the rule
        test: /\.js$/, // pattern matching for the files this rule applies to
      },
      {
        loader: ExtractTextPlugin.extract({ // legacy syntax because of ExtractTextPlugin
          loader: 'css-loader',
        }),
        test: /\.css$/,
      },
      {
        test:/\.(jpe?g|png|gif|svg)$/,
        use: [
          // expanded to be an object so we can include options
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'image-webpack-loader',
        ],
      },
    ],
  },
  plugins: [
    // save all src caught by the above rule to a new style.css file
    new ExtractTextPlugin('style.css'),
  ],
};

module.exports = config;
