var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js',
      publicPath: '/'
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
      rules: [
        {
          oneOf: [
            {
              test: [
                /\.bmp$/,
                /\.gif$/,
                /\.jpe?g$/,
                /\.png$/,
                /\.ttf$/,
                /\.otf$/,
                /\.woff$/,
                /\.svg$/,
                /\.eot$/,
                /\.mp4$/
              ],
              loader: require.resolve('file-loader'),
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
                fallback: 'responsive-loader',
                quality: 85,
                esModule: false
              }
            },
            {
              test: /\.(js|jsx)$/,
              loader: require.resolve('babel-loader'),
              options: {
                cacheDirectory: true
              }
            },
            {
              test: [/\.scss$/, /\.css$/],
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
              test: /\.txt$/i,
              use: 'raw-loader'
            }
          ]
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      host: '0.0.0.0',
      port: 3001
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, './public/index.html')
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css'
      })
    ],
    performance: {
      hints: false
    }
  };
};
