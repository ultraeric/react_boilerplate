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
      staticResources: path.resolve(__dirname, './App/staticResources'),
      staticData: path.resolve(__dirname, './App/staticResources/staticData'),
      staticStyles: path.resolve(__dirname, './App/staticResources/staticStyles')
    },
    extensions: [
      '.js', '.jsx', '.css', ',scss'
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
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader?sourceMap&sourceComments',
        ],
      },
      {
        test: /\.scss$/,
        use: [{loader: "style-loader"}, {loader: "css-loader"}, {loader: "sass-loader"}]
      }
    ]
  }
};
