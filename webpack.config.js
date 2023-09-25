const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./src/html/"),
    },
    port: 5500,
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
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../style/[name].css",
    }),
  ],
};
