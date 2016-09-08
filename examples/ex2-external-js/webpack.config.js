var webpack = require("webpack");
var path=require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
  entry:{
    index:'./src/index.js',
    vendor:[]
  },
  output:{
    path: path.join(__dirname,"public"),
    filename:'[name].bundle.js'
  },
  externals: {
        // require("react") is external and available
        //  on the global var React
        "react": "React",
        "react-dom": "ReactDOM"
  },
  module:{
    loaders:[
      {
        test:/\.js/,
        loader:'babel-loader',
        exclude:/node_modules/
      },
      // Extract css files
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      // Optionally extract less files
      // or any other compile-to-css language
      {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^(buffertools)$/), // unwanted "deeper" dependency,
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    new ExtractTextPlugin("[name].css")
  ]
}