var path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './App/App.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      Footer: path.resolve(__dirname, './App/Footer'),
      Header: path.resolve(__dirname, './App/Header'),
      MainMenu: path.resolve(__dirname, './App/MainMenu'),
      Pages: path.resolve(__dirname, './App/Pages'),
      HomePage: path.resolve(__dirname, './App/Pages/HomePage'),
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
        query: {
          presets:[ 'es2015', 'react', 'stage-2' ]
        }
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader?sourceMap&sourceComments'
        ],
        include: path.join(__dirname, 'node_modules'),
        exclude: /flexboxgrid/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
        include: /flexboxgrid/
      },
      {
        test: /\.scss$/,
        use: [{loader: "style-loader"}, {loader: "css-loader"}, {loader: "sass-loader"}]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
    // ,
    // new webpack.optimize.UglifyJsPlugin({
    //   comments: false, // remove comments
    //   compress: {
    //     unused: true,
    //     dead_code: true, // big one--strip code that will never execute
    //     warnings: false, // good for prod apps so users can't peek behind curtain
    //     drop_debugger: true,
    //     conditionals: true,
    //     evaluate: true,
    //     drop_console: false, // strips console statements
    //     sequences: true,
    //     booleans: true,
    //   }
    // })
  ]
};
