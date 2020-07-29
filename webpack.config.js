const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'json']
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new InterpolateHtmlPlugin(HtmlWebpackPlugin,{
            PUBLIC_URL: ''
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public', to: '' },
            ]
        })
    ]
}