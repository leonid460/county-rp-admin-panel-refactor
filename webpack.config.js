const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const CopyPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const clearConsole = require('react-dev-utils/clearConsole');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const publicUrl = '';

console.log('IS PROD: ', isProd);
console.log('IS DEV: ', isDev);

const filename = (ext) => (
  isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`
);

function jsLoaders() {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        babelrc: true
      }
    },
  ];

  if (isDev) {
    loaders.push('eslint-loader');
  }

  return loaders;
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: isDev ? 'development' : 'production',
  entry: ['@babel/polyfill', './index.tsx'],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        include: path.resolve(__dirname, 'src/'),
        exclude: path.resolve(__dirname, 'node_modules/'),
        use: jsLoaders(),
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/i,
        loader: 'file-loader'
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, 'tsconfig.json'),
    })],
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  devtool: isDev ? 'source-map' : false,
  devServer: {
    port: 4000,
    hot: isDev,
    contentBase: './build',
    historyApiFallback: true,
    noInfo: true,
    onListening: function(server) {
      clearConsole();
      const port = server.listeningApp.address().port;
      console.log('Listening on: http://localhost:'+port);
    },
    overlay: {
      errors: true
    },
    watchOptions:{
      poll: true,
      ignored: "/node_modules/"
    },
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname,'tsconfig.json'),
      }
    }),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template:  path.resolve(__dirname, 'public/template.html'),
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
      },
    }),
    new InterpolateHtmlPlugin(HTMLWebpackPlugin, {
      PUBLIC_URL: publicUrl,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/'),
          to: path.resolve(__dirname, 'build/'),
        },
      ],
    })
  ]
}
