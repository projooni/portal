module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1
                            // modules: true,
                            // localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        },
                    },
                    // {
                    //     loader: require.resolve('postcss-loader'),
                    //     options: {
                    //         // Necessary for external CSS imports to work
                    //         // https://github.com/facebookincubator/create-react-app/issues/2677
                    //         ident: 'postcss',
                    //         plugins: () => [
                    //             require('postcss-flexbugs-fixes'),
                    //             autoprefixer({
                    //                 browsers: [
                    //                     '>1%',
                    //                     'last 4 versions',
                    //                     'Firefox ESR',
                    //                     'not ie < 9', // React doesn't support IE8 anyway
                    //                 ],
                    //                 flexbox: 'no-2009',
                    //             }),
                    //         ],
                    //     },
                    // },
                ],
            },
            {
                test: /\.scss/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1
                            // modules: true,
                            // localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        },
                    },
                    // {
                    //     loader: require.resolve('postcss-loader'),
                    //     options: {
                    //         // Necessary for external CSS imports to work
                    //         // https://github.com/facebookincubator/create-react-app/issues/2677
                    //         ident: 'postcss',
                    //         plugins: () => [
                    //             require('postcss-flexbugs-fixes'),
                    //             autoprefixer({
                    //                 browsers: [
                    //                     '>1%',
                    //                     'last 4 versions',
                    //                     'Firefox ESR',
                    //                     'not ie < 9', // React doesn't support IE8 anyway
                    //                 ],
                    //                 flexbox: 'no-2009',
                    //             }),
                    //         ],
                    //     },
                    // },
                    {
                        loader: require.resolve('sass-loader'),
                        options: {
                            // 나중에 입력
                        }
                    }
                ],
            }
        ]
    }
};