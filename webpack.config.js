const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

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
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        // {
        //   test: require.resolve('angular'),
        //   use: {
        //     loader: 'exports-loader',
        //     options: {
        //       exports: 'angular'
        //     }
        //   }
        // },
      ],
    },
    // resolve: {
    //   alias: {
    //     angular: __dirname + "/node_modules/angular/angular.min.js"
    //   }
    // },
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