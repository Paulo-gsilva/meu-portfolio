const path = require('path'); //Common js

module.exports = {
    mode: 'production',
    entry: './src/portfolio.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'portfoliobundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']  
        }]
    },
    devtool: 'source-map'
}
