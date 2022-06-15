const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
      main: path.resolve(__dirname, './src/script.js'),
      history: path.resolve(__dirname, './src/history.js'),
    },

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },

         {
        test: /\.html$/i,
        loader: "html-loader",
      },

        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },

        {
          test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },

        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
          title: 'webpack Boilerplate',
          template: path.resolve(__dirname, './index.html'), // шаблон
          filename: 'index.html', // название выходного файла
      }),

      new HtmlWebpackPlugin({
        title: 'webpack Boilerplate',
        template: path.resolve(__dirname, './history.html'), // шаблон
        filename: 'history.html', // название выходного файла
    }),

      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      }),

      new CopyPlugin({
        patterns: [
          { from: 'src/img', to: './img' },
        ],
      }),
    ],
};
