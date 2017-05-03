const {join} = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

const plugins = [
  new HtmlWebpackPlugin({
    inject: false,
    template: require('html-webpack-template'),
    appMountId: 'root'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new ExtractTextPlugin({
    filename: '[name].css'
  })
];

if(process.env.NODE_ENV === 'development') {
  plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = {
  context: join(__dirname, 'src'),
  entry: './index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx']
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        rules: [
          {
            loader: 'tslint-loader',
            enforce: 'pre'
          },
          {
            loader: 'awesome-typescript-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(jpe?g|svg|png|gif|woff2?|eot|otf|ttf)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins
};


