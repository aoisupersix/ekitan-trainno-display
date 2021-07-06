const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ExtReloader = require('webpack-ext-reloader');

const srcDir = path.join('..', 'src');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: {
        background: path.join(__dirname, srcDir, 'background.ts'),
    },
    plugins: [
        // Add hot reload background script
        new CopyPlugin({
            patterns: [
                {
                    from: path.join('public', 'manifest.json'),
                    to: path.join('..', 'manifest.json'),
                    transform(content) {
                        const json = JSON.parse(content.toString());
                        json['background'] = {
                            scripts: ['js/background.js']
                        };

                        return JSON.stringify(json, null, 2);
                    },
                    force: true,
                }
            ],
        }),
        new ExtReloader({
            port: 9060,
            reloadPage: true,
            entries: {
                contentScript: 'train_contentscript',
                background: 'background',
            }
        }),
    ],
});
