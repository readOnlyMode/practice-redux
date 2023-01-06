import path from "path";
import { Configuration } from "webpack";
// **********************Plugins*******************************
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
// **********************Plugins*******************************
export default {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  target: "web",
  entry: path.join(__dirname, "./src/index.tsx"),
  devtool: process.env.NODE_ENV === "development" ? "eval-source-map" : false,
  output: {
    filename: "[name]-[hash].js",
    path: path.join(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]-[hash].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({ template: "./assets/index.html" }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
} as Configuration;
