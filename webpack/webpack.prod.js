const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.common.js');

module.exports = merge(config, {
    output: {
        library: 'vueInlineSvg',
        libraryTarget: 'umd'
    },
    externals: {
        vue: {
            commonjs: "vue",
            commonjs2: "vue",
            amd: "vue",
            root: "vue"
        }
    },
    plugins: [
        // short-circuits all Vue.js warning code
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // minify with dead-code elimination
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});
