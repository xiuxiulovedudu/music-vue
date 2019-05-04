let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let VueLoaderPlugin = require('vue-loader/lib/plugin')
let webpack = require('webpack')
// vue-loader 插件 , 他的指责是将你定义过的其他规则复制并应用到 .vue 文件里相应语言的块

module.exports = {
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: ['url-loader']
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new VueLoaderPlugin(),
    new webpack.IgnorePlugin(/\.\/locale/, /moment/)
  ],
  resolve: {
    alias: {
      // vue: 'vue/dist/vue.js'
    }
  }
}