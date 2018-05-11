module.exports = {
    output: {
        filename: 'index.js'
    },
    resolve: {
        modules: [
            "node_modules"
        ]
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
        'react-dom/server': 'react-dom/server',
        '@storybook/addon-options': '@storybook/addon-options'
    },
    optimization: {
        minimize: false
      },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
};