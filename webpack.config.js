const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  return {
    mode: env.production ? 'production' : 'development',
    entry: {
      "index": path.join(__dirname, 'src/index.js')
    },
    output: {
      path: path.join(__dirname, "dist"),
      publicPath: '/',
      filename: "[name].js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.lazy\.html$/,
          type: 'asset/resource',
        },
        {
          test: /\.html$/i,
          exclude: /\.lazy\.html$/,
          loader: "html-loader",
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      watchFiles: ['src/**/*', 'public/**/*'],
      port: 'auto',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      }),
    ],
  }
}