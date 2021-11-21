const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  // 当mode是development的时候，会在页面环境中看到源码
  // devtool:"sourceMap",
  //   入口文件
  entry: {
    index: "./index.js",
    demo: "./src/demo.js",
  },
  //   出口文件
  output: {
    //   __dirname指的是项目的根目录
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:5].js",
    // publicPath: "https://cdn.example.com/assets/",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    hot: true,
    // 代理后端api
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:9000",
    //     pathRewrite: { "^/api": "" },
    //   },
    // },
  },
  //   模块文件
  // 在增加图片资源后webpack打包失败，需要增加配置，解决该问题
  module: {
    rules: [
      {
        // 增加对图片文件的处理规则，安装file-loader
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]?[hash]",
            },
          },
        ],
      },
      {
        //   对字体文件的支持
        test: /\.(tif|tiff)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        //   对css文件的支持,less文件的支持
        test: /\.(css|less)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
          {
            //   增加对不同浏览器样式的兼容autoprefixer
            loader: "postcss-loader",
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    //自动生成index.html文件在打包之后
    new HtmlWebpackPlugin(),
    /**
     * All files inside webpack's output.path directory will be removed once, but the
     * directory itself will not be. If using webpack 4+'s default configuration,
     * everything under <PROJECT_DIR>/dist/ will be removed.
     * Use cleanOnceBeforeBuildPatterns to override this behavior.
     *
     * During rebuilds, all webpack assets that are not used anymore
     * will be removed automatically.
     *
     * See `Options and Defaults` for information
     */
    new CleanWebpackPlugin(),
    //增加模块热更新功能
    new webpack.HotModuleReplacementPlugin(),
  ],
};