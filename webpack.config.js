const path =require('path');
module.exports = {
  mode: "production",
  entry: "./index.js",
  output:{
      // path: path.resolve(__dirname, "dist"),
    //   __dirname指的是项目的根目录
path:path.resolve(__dirname,'dist'),
filename:'practice-webpack-yideng.bundle.js',

  },
};