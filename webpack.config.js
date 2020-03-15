const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const publicPath = process.env.PUBLIC_PATH || '/';

module.exports = {
    entry: {
            main : './src/Main Page/Js/index.js',
            about : './src/About Page/Js/index.js',
            analytics : './src/Analytics Page/Js/index.js',
            slick : './src/About Page/Js/slick.js',
            
    },
    externals: {
        "jquery": "jQuery"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './[name]/[name].[chunkhash].js',
        publicPath: publicPath,
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [(isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                'css-loader', 
                'postcss-loader',
            ],
        }, 
        {
            test: /\.(png|jpg|gif|ico|svg)$/,
            use: [
                    
                'file-loader?name=./images/[name].[ext]', 
                 {
                    loader: 'image-webpack-loader',
                    options: {
                                    
                    },
                }
            ],
        },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            loader: 'file-loader?name=./vendor/[name].[ext]',
            
         },       
        ]

    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/Main Page/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/About Page/index.html',
            filename: './about/about.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/Analytics Page/index.html',
            filename: './analytics/analytics.html'
        }),
        new WebpackMd5Hash(),
        new webpack.DefinePlugin({
            
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),  
                'PUBLIC_PATH': JSON.stringify(process.env.PUBLIC_PATH)
        }),
        new MiniCssExtractPlugin({
            filename: './[name]/[name].[contenthash].css'
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
                preset: ['default'],
        },
        canPrint: true
    })
    ]
    
 
};