var webpack = require('webpack');
var path = require('path');
var objectAssign = require("object-assign");

var node_modules = path.resolve(__dirname, 'node_modules');
var reactPath = path.resolve(node_modules, 'react');

// Get the environment
var prod = process.env.NODE_ENV === 'prod';
console.log( prod ? "Production Mode" : "Development Mode");

// Common config for all envs
var config = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/dist/'
    },
    resolve : {
        root: path.resolve(__dirname, '.'),
        extensions: ['', '.js', '.jsx'],
        alias: {
            "react": reactPath
        }
    },
};

// Production specific config
if (prod) {
    objectAssign(config, {
        entry: {
          app: "./src/js/main.jsx",
          vendors: ['react', 'react-responsive-carousel']
        },
        module: {
            loaders: [
                { test: /\.(js|jsx)?$/, loaders: ['babel'], exclude: node_modules },
                { test: /\.css$/, loader: "style-loader!css-loader" }
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
        ]
    });

// Development
} else {
    objectAssign(config, {
        devtools: "eval",
        entry: [
            "webpack-dev-server/client?http://localhost:8080",
            "webpack/hot/only-dev-server",
            "./src/js/main.jsx"
        ],
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ],
        module: {
            loaders: [
                { test: /\.(js|jsx)?$/, loaders: ['react-hot','babel'], exclude: node_modules },
                { test: /\.css$/, loader: "style-loader!css-loader" }
            ]
        }
    });
}

module.exports = config;