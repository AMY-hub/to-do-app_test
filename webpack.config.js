const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const { ESBuildMinifyPlugin } = require('esbuild-loader');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env, { mode }) => {
    const isProduction = mode === 'production';

    return {
        mode,
        entry: './src/index.tsx',

        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            alias: {
                '@': path.resolve(__dirname, 'src/'),
            },
        },

        output: {
            publicPath: isProduction ? '/to-do-app_test/' : '/',
            path: path.resolve(__dirname, 'build'),
            filename: isProduction ? 'js/[name].[chunkhash].js' : 'js/[name].js',
            chunkFilename: isProduction ? 'js/[name].[chunkhash].js' : 'js/[name].js',
        },

        module: {
            rules: [
                {
                    test: /\.(ts|tsx)?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.?(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                            plugins: [
                                [
                                    'babel-plugin-styled-components',
                                    {
                                        minify: isProduction,
                                        transpileTemplateLiterals: isProduction,
                                    },
                                ],
                            ],
                        },
                    },
                },
                {
                    test: /\.css$/i,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',

                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            'postcss-preset-env',
                                            {
                                                autoprefixer: {
                                                    grid: true,
                                                    flexbox: true,
                                                },
                                            },
                                        ],
                                    ],
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jp(e*)g|gif|webp|avif)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]',
                        },
                    },
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack', 'url-loader'],
                },
            ],
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'public', 'index.html'),
                minify: isProduction,
                hash: isProduction,
                cache: isProduction,
                showErrors: !isProduction,
            }),

            new Dotenv({
                systemvars: true,
            }),
            new MiniCssExtractPlugin(),
        ].concat(
            !env.analyze
                ? []
                : [
                      new BundleAnalyzerPlugin({
                          analyzerHost: 'localhost',
                          analyzerPort: 3006,
                          reportTitle: 'Template - Analyze Bundle Sizes',
                      }),
                  ]
        ),

        optimization: {
            minimize: isProduction,
            mergeDuplicateChunks: true,
            removeEmptyChunks: true,
            sideEffects: false,
            minimizer: [
                new ESBuildMinifyPlugin({
                    target: 'es2015',
                }),
            ],
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'all',
                        enforce: true,
                        name: (module) => {
                            const [, match] = module.context.match(
                                /[\\/]node_modules[\\/](.*?)([\\/]([^\\/]*)([\\/]([^\\/]*))?([\\/]([^\\/]*))?|$)/
                            );

                            return `vendors/${match.replace('@', '')}`;
                        },
                    },
                },
            },
        },

        performance: {
            maxEntrypointSize: Infinity,
            maxAssetSize: 1024 ** 2,
        },

        devtool: isProduction ? 'source-map' : 'inline-source-map',

        devServer: {
            host: 'localhost',
            port: 3000,
            server: 'http',
            historyApiFallback: true,
        },
    };
};
