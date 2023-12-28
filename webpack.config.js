require('dotenv').config();

const path = require('path');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('client/dist'),
    clean: {
      keep: /assets|index\.html|style\.css$/,
    },
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },

      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}