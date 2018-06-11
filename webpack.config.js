// require --------------------------------------------------------------------

const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// require --------------------------------------------------------------------

module.exports = {
 
    // entry ------------------------------------------------------------------

    entry: [
        "whatwg-fetch",
        "./app/scripts/client.jsx"
    ],

    // output -----------------------------------------------------------------

    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'builds/app.js'
    },

    // resolve ----------------------------------------------------------------

    resolve: {
        alias: {
            App: path.resolve(__dirname, 'app/scripts/'),                
            Images: path.resolve(__dirname, 'app/images')
        }
    },

    // plugins ----------------------------------------------------------------

    plugins: [
        new UglifyJSPlugin({
           sourceMap: true
        }),  
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new ExtractTextPlugin("builds/app.css")
    ],

    // module -----------------------------------------------------------------

    module: {

        // loaders ------------------------------------------------------------

        loaders: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        }
                    ]
                })
            },         
            {
                test: /\.(jpg|png|svg)$/,
                loader: "url-loader",
                exclude: /node_modules/,              
                options: {
                    limit: 25000
                }
            },      
            { 
                test: /\.js$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            },
            { 
                test: /\.jsx$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            }
        ]
    }
}