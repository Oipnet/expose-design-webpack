const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

let config = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + "/";
              },
            },
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [require("autoprefixer")],
              },
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "images/",
              postTransformPublicPath: (p) => `__webpack_public_path__ + ${p}`,
            },
          },
        ],
      },
      {
        test: /\.(svg)$/i,
        use: { loader: "svg-url-loader" },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          limit: 10000,
          name: "[name].[hash:7].[ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/templates/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "buttons.html",
      template: "src/templates/buttons.html",
    }),
    new HtmlWebpackPlugin({
      filename: "cards.html",
      template: "src/templates/cards.html",
    }),
    new HtmlWebpackPlugin({
      filename: "forms.html",
      template: "src/templates/forms.html",
    }),
    new HtmlWebpackPlugin({
      filename: "stepper.html",
      template: "src/templates/stepper.html",
    }),
    new HtmlWebpackPlugin({
      filename: "tooltips.html",
      template: "src/templates/tooltips.html",
    }),
    new HtmlWebpackPlugin({
      filename: "tables.html",
      template: "src/templates/tables.html",
    }),
    new HtmlWebpackPlugin({
      filename: "tags.html",
      template: "src/templates/tags.html",
    }),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, "./partials/navbar.html"),
        template_filename: "*",
        priority: "high",
      },
      {
        path: path.join(__dirname, "./partials/aside.html"),
        template_filename: "*",
        priority: "high",
      },
    ]),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    historyApiFallback: true,
    inline: true,
    open: true,
    hot: true,
  },
  devtool: "eval-source-map",
};

module.exports = config;
