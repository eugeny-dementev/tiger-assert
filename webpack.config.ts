const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/assert.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: 'assert.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name:'tigerAssert',
      type: 'umd',
    },
    globalObject: 'this',
    clean: true,
  },
};


