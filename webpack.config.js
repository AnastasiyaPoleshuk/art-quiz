const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    assetModuleFilename: 'assets/[file]/[name][ext]'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {minimize: false}
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources:[
                'src/styles/vars.scss',
              ]
            }
          }
        ]
      },
      {
        test: /\.(png| jpe?g|svg)$/,
        use: [{
            loader: "url-loader",
            options: {
              limit: 5000
            }
          }
        ]
      },
      
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/template.html",
      filename: "./index.html"
    })
  ],
  devServer: {
      compress: true,
      port: 3000,
  }
};

