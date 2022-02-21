const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/public');

module.exports = {
  mode: 'production',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              [
                'import',
                { libraryName: 'antd', style: true },
                'antd',

              ]
            ],

          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  // builds source map so there is no devtool error
  // devtool: 'inline-source-map',
};
