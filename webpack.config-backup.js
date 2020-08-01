const webpack = require('webpack');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const CopyPlugin = require('copy-webpack-plugin');

const publicUrl = '';

module.exports = {
  context: __dirname,
  entry: {
    app: path.join(__dirname, 'src/index.tsx'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'json'],
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true,
    open: 'Google Chrome',
    port: 4000,
    noInfo: false,
    onListening: function(server) {
      const port = server.listeningApp.address().port;
      console.log('Listening on port:', port);
    },
    overlay: {
      warnings: true,
      errors: true,
    },
    watchOptions: {
      poll: true,
      ignored: '/node_modules/',
    },
    contentBase: path.join(__dirname, '/src/'),
  },
  module: {
    rules: [
      {
        test: /\.(|tstsx)?$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve( __dirname, 'public/index.html' ),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
      PUBLIC_URL: publicUrl,
    }),
    new CopyPlugin({
      patterns: [
        {from: 'public', to: ''},
      ],
    }),
  ],
};
