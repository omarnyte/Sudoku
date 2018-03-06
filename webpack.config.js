module.exports = {
    entry: "./assets/javascript/sudoku.js",
    output: {
        path: __dirname,
        filename: "assets/javascript/bundle.js"
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '*']
    }
};
