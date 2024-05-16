const path = require('path');

module.exports = {
    devServer: {
        static: {
            directory : __dirname,
            watch  : true,
        },
        compress: true,
        hot: false,
        port: 9092,
        open : false,
        client : {
            progress : true,
        },
        devMiddleware: {
            index: true,
            writeToDisk: true,
          }

    },
    entry: path.join(__dirname, './src/index.js'),
    output: {
        filename: 'DGstyles.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: '/node_modules/'
            }
        ]
    },
    resolve: {
        extensions: ['.css', '.js']
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
};
