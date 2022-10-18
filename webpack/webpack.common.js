const webpack = require("webpack");
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
      content: path.join(__dirname, '..', 'src', 'content')
    },
    output: {
        path: path.join(__dirname, '..', 'dist', 'js'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        // exclude locale files in moment
        new webpack.IgnorePlugin({ resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ }),
        new CopyPlugin({
            patterns: [
                {
                    from: '.',
                    to: '..',
                    context: 'public',
                }
            ],
        }),
    ]
};
