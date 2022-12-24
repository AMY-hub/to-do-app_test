const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
        chunkFilename: '[name].bundle.js',
    },
    devServer: {
        static: {       
            directory: path.resolve(__dirname, './build')
        },
        compress: true,
        port: 3000,
    },
    devtool: 'inline-source-map',
    plugins: [ 
        new HTMLWebpackPlugin({template: './public/index.html'}),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /.(sass|css|scss)$/,
                use: [
                    {
                  loader: MiniCssExtractPlugin.loader,
                },
                {
                  loader: 'css-loader',
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                        plugins: [
                            'autoprefixer'
                        ],
                        }
                    }
                },
                {
                    loader: 'resolve-url-loader'
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            sourceMap: true,
                            modules: true  
                        }
                    }
                }
                ],
            },
            {
                test: /\.svg$/i,
                type: 'asset',
                resourceQuery: /url/, // *.svg?url
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                type: 'asset',
            },
            {
                test: /\.(jpg|png)$/,
                type: 'asset/inline',
            },
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                reactVendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
                    name: 'vendor-react',
                    chunks: 'all',
                },
                corejsVendor: {
                    test: /[\\/]node_modules[\\/](core-js)[\\/]/,
                    name: 'vendor-corejs',
                    chunks: 'all',
                },
            }
        }
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
};