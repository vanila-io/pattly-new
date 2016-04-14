import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      'babel-polyfill',
      path.join(__dirname, 'src', 'styles', 'global.css'),
      path.join(__dirname, 'src', 'index'),
    ],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name]-bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: path.join(__dirname, 'src') },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules&camelCase'],
        include: path.join(__dirname, 'src'),
      },
      { test: /\.(png|jp(e?)g|svg|eot|woff(2?)|ttf)$/, loader: 'file?name=[hash].[ext]' },
    ],
  },
};
