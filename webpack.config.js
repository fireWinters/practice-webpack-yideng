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
    // 增加对图片文件的处理规则
    rules: [
      {
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
    ],
  },
};