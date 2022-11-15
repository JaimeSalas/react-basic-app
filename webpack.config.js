const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const basePath = __dirname;

module.exports = {
    context: path.join(__dirname, 'src'),
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    entry: {
        app: ['./index.tsx', './styles.css']
    },
    devtool: 'eval-source-map',
    output: {
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
          },
          {
            test: /\.(png|jpg)$/,
            type: "asset/resource",
          },
          {
            test: /\.html$/,
            loader: "html-loader",
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "style-loader",
              },
              {
                loader: "css-loader",
              },
            ],
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ]
};
