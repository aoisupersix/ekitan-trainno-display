const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const hotReloadConfig = require('../mv3-hot-reload.config')
const srcDir = path.join('..', 'src');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: {
        background: [
          path.join(__dirname, srcDir, 'background'),
          path.join('mv3-hot-reload', 'background'),
        ],
        content: [
          path.join(__dirname, srcDir, 'content'),
          path.join('mv3-hot-reload', 'content'),
        ],
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
                            service_worker: 'js/background.js'
                        };

                        return JSON.stringify(json, null, 2);
                    },
                    force: true,
                }
            ],
        }),
        new webpack.EnvironmentPlugin({
          MV3_HOT_RELOAD_PORT: hotReloadConfig.port,
        }),
    ],
});
