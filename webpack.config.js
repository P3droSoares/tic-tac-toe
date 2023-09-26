const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  devServer:{
    static:{
      directory: path.resolve(__dirname, "public/view/")
    }
  },
  entry: {
    index: "./src/scripts/index.js",
    core: "./src/scripts/core.js",
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "public/scripts"),
    filename: "[name].bundle.min.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            
          },
        },
      },
      {
        test:/\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.svg$/,
        use: {
          loader: "file-loader",
          options: {
            name: "../assets/img/[name].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      filename: "../view/index.html",
      template: "./src/view/index.html",
    }),
    new HtmlPlugin({
      filename: "../view/game.html",
      template: "./src/view/game.html",
    }),
    new MiniCssExtractPlugin({
      filename: "../stylesheets/[name].min.css"
    })
  ],
};
