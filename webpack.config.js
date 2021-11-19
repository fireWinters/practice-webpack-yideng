const path =require('path');
module.exports = {
  mode: "production",
  //   入口文件
  entry: "./index.js",
  //   出口文件
  output: {
    //   __dirname指的是项目的根目录
    path: path.resolve(__dirname, "dist"),
    filename: "practice-webpack-yideng.bundle.js",
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
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")],
            },
          },
        ],
      },
    ],
  },
};