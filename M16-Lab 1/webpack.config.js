const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/employees.jsx',
    output: {
        filename: 'employees.bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
            },
        ],
    },
};
