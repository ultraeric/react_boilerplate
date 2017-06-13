var path = require('path');

module.exports = {
  entry: './App/App.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      Footer: path.resolve(__dirname, './App/Footer/index.js'),
      staticResources: path.resolve(__dirname, './App/staticResources/index.js')
    },
    extensions: [
      '.js', '.jsx'
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', ['es2015', { modules: false }]]
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};
