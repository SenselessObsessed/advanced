const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'main.js'
    },
    mode: 'production',
    devServer: {
        port: 3000,
        open: true
    }
}