const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@containers": path.resolve(__dirname, "src/containers/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@routes": path.resolve(__dirname, "src/routes/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@context": path.resolve(__dirname, "src/context/"),
      "@services": path.resolve(__dirname, "src/services/"),
      "@schemas": path.resolve(__dirname, "src/schemas/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@icons": path.resolve(__dirname, "src/assets/icons/"),
      "@logos": path.resolve(__dirname, "src/assets/logos/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      { test: /\.html$/, use: [{ loader: "html-loader" }] },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: { modules: true },
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3005,
    historyApiFallback: true,
  },
};
