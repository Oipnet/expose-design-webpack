const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

let config = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            sourceMap: true
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: () => [
                require('autoprefixer')
              ],
            },
            sourceMap: true
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          },
        }
      ]
    }]
  },
  plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin(), new HtmlWebpackPartialsPlugin([
    {path: path.join(__dirname, './partials/navbar.html')},
  ])],
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    historyApiFallback: true,
    inline: true,
    open: true,
    hot: true
  },
  devtool: "eval-source-map"
}

module.exports = config