import path from 'path';

import dotenv from 'dotenv';
import webpack from 'webpack';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

const __dirname = path.resolve();
const envPath = path.resolve(__dirname, '.env');

const getEntry = (isDevMode = true) => {
  if (isDevMode) return './src/index.tsx';

  return {
    polyfill: '@babel/polyfill',
    src: './src/index.tsx',
  };
};

const getCssLoaders = (isDevMode = true, isCssModules = false) => {
  const cssLoaders = [];

  if (isDevMode) cssLoaders.push('style-loader');
  else cssLoaders.push(MiniCssExtractPlugin.loader);

  if (isDevMode && isCssModules) cssLoaders.push('css-modules-typescript-loader');

  if (isCssModules) {
    cssLoaders.push({
      loader: 'css-loader',
      options: {
        esModule: true,
        modules: {
          auto: true,
          localIdentContext: path.resolve(__dirname, 'src'),
          localIdentName: isDevMode ? '[folder]__[local]__[hash:5]' : '[contenthash:base64]',
        },
      },
    });
  } else {
    cssLoaders.push('css-loader');
  }

  if (!isDevMode) {
    cssLoaders.push({
      loader: 'postcss-loader',
    });
  }

  return cssLoaders;
};

const getRuntimeEnvData = () => {
  const newEnv = dotenv.config({
    path: envPath,
  });

  return JSON.stringify(newEnv.parsed);
};

const config = (env, { mode }) => {
  const isDevMode = mode === 'development';

  return {
    entry: getEntry(isDevMode),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDevMode ? '[name].js' : '[contenthash].js',
      assetModuleFilename: isDevMode ? 'assets/[name][ext]' : 'assets/[hash][ext]',
    },
    devtool: 'eval-source-map',
    devServer: {
      port: 3000,
      historyApiFallback: true,
      watchFiles: ['./src/**/*', './.env'],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    optimization: {
      minimize: !isDevMode,
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'libs',
            test: /node_modules/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
        {
          test: /\.css$/,
          exclude: /\.module.css$/,
          use: getCssLoaders(isDevMode, false),
        },
        {
          test: /\.scss$/,
          exclude: /\.module.scss$/,
          use: [...getCssLoaders(isDevMode, false), 'sass-loader'],
        },
        {
          test: /\.module.css$/,
          use: getCssLoaders(isDevMode, true),
        },
        {
          test: /\.module.scss$/,
          use: [...getCssLoaders(isDevMode, true), 'sass-loader'],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'ts-loader'],
        },
        {
          test: /\.(ttf|otf|woff|woff2)$/,
          type: 'asset/resource',
        },
        {
          test: /\.(png|jpg|webp|gif|svg)$/,
          type: 'asset/resource',
          use: isDevMode
            ? []
            : [
                {
                  loader: 'image-webpack-loader',
                  options: {
                    mozjpeg: {
                      progressive: true,
                    },
                    optipng: {
                      enabled: false,
                    },
                    pngquant: {
                      quality: [0.65, 0.9],
                      speed: 4,
                    },
                    gifsicle: {
                      interlaced: false,
                    },
                    webp: {
                      quality: 75,
                    },
                  },
                },
              ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: isDevMode ? 'index.html' : '[contenthash].html',
      }),
      new webpack.DefinePlugin({
        'process.env': webpack.DefinePlugin.runtimeValue(getRuntimeEnvData, {
          fileDependencies: [envPath],
        }),
      }),
      ...(isDevMode
        ? []
        : [
            new MiniCssExtractPlugin({
              filename: '[contenthash].css',
            }),
          ]),
    ],
  };
};

export default config;
