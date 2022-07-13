import path from 'path'
import Webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import 'webpack-dev-server'
import dotenv from 'dotenv'
import Dotenv from 'dotenv-webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin' // ts check spec up!

//Hot Reloading
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

const isDev = process.env.NODE_ENV !== 'production'
const envPath = `./.env.${isDev ? 'development' : 'production'}`
dotenv.config({path: envPath}) // template Title에 필요

const config: Webpack.Configuration = {
    name: 'react18_typescript',
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'hidden-source-map' : 'eval',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    entry: {
        app: './src/index.tsx'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: { browsers: ['last 2 chrome versions'] },
                            },
                        ],
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                    ],
                    env: {
                        development: {
                            plugins: [require.resolve('react-refresh/babel')]
                        }
                    }
                },
                exclude: path.join(__dirname, 'node_modules'),
            },
            {
                test: /\css?$/,
                use: ['css-loader', 'style-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new Dotenv({
            path: envPath
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: process.env.TITLE,
            minify: false, // 압축 설정
        }),
        new ForkTsCheckerWebpackPlugin({ async: false }),
        new Webpack.EnvironmentPlugin({ NODE_ENV: isDev ? 'development' : 'production' }),
        new Webpack.ProvidePlugin({
            React: "react",
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        // publicPath: '/dist/'
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        // devMiddleware: { publicPath: '/dist' },
        // static: { directory: path.resolve(__dirname) },
        compress: true,
        open: true,
        hot: true
    }
}

if (isDev && config.plugins) {
    config.plugins.push(new Webpack.HotModuleReplacementPlugin())
    config.plugins.push(new ReactRefreshWebpackPlugin())
}
if (!isDev && config.plugins) {
    config.plugins.push(new Webpack.LoaderOptionsPlugin({ minimize: true }))
}

export default config