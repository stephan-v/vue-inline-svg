const path = require('path');

module.exports = {
    entry: './example/main.js',
    output: {
        path: path.resolve(__dirname, './../dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'raw-loader'
                    }
                ]
            }
        ]
    },
    // Needed to resolve paths starting from the root of the directory.
    resolve: {
        modules: [
            path.resolve('./'),
            path.resolve('./node_modules')
        ]
    }
};
