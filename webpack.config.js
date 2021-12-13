const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    const isProd = options.mode === 'production';

    const conf = {
        entry: {
            main: path.resolve(__dirname, './src/index.js'),
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].bundle.js',
            clean: true,
        },
        devtool: isProd ? false : 'eval-cheap-module-source-map',
        module: {
            rules: [
                // JavaScript
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'eslint-loader'],
                },
                {
                    test: /\.(scss|css)$/,
                    use: [
                        'style-loader', 
                        'css-loader',  
                        'sass-loader'],
                }
            ],
        },    
        plugins: [
            new HtmlWebpackPlugin({
                title: 'webpack Boilerplate',
                template: path.resolve(__dirname, './src/template.html'), // шаблон
                filename: 'index.html', // название выходного файла
            }),
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map',
                test: /\.jsx?|\.js?$/,
                exclude: [
                    '*.css', '*.styles.min.css', '*.scss'
                ]
            }),
        ],
        devServer: {
            historyApiFallback: true,
            open: true,
            compress: true,
            client: {
                overlay: {
                    errors: true,
                    warnings: false,
                },
            }
        },

    };

    return conf;
};
