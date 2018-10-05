/**
 * Created by peterzhang on 2018/10/4.
 */
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const _root = path.resolve(process.cwd())
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ["@babel/polyfill", './main.js'],
    output: {
        filename: 'bundle.[hash].js',
        publicPath: '/',
        path: path.resolve(_root, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.vue', 'json'],
        alias: {

        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },{
            test: /\.(le|c)ss$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }]
    },
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        contentBase: "/",
        hot: true
    },
    plugins: [
        new VueLoaderPlugin(),

        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'ZG-Front-UI',
            inject: 'body',
            template: path.resolve(__dirname, './index.html'),
            chunksSortMode: 'dependency'
        }),


    ],
}