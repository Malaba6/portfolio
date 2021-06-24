const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
    inline:true,
    port: 8082
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(png|gif|svg|ico)$/,
        use: ['file-loader'],
        // use: [
        //   'file-loader',
        //   {
        //     loader: 'image-webpack-loader',
        //     options: {
        //       bypassOnDebug: true,
        //       desable: true
        //     }
        //   }
        // ]
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new ESLintPlugin(),
  ],
};
