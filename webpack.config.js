const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'dist');

const { JsonAccessOptimizer } = require('webpack-json-access-optimizer');
const { ProvidePlugin } = require('webpack');

let config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: DIST_DIR
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    module : {
        rules: [
            {
                test: /strings\.json$/,
                use: [
                    'webpack-json-access-optimizer', 
                ],
                type: 'json'
            }
        ]
    },
    plugins: [
        new ProvidePlugin({
            $t: './$tProvider'
        }),
        new JsonAccessOptimizer({
            accessorFunctionName: '$t', // i18n function name
        })
    ],
    optimization: {
        usedExports: false,
    },
    devtool: 'source-map'
};

module.exports = config;