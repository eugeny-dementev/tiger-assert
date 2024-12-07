const path = require('path');

module.exports = [
  // UMD Build
  {
    entry: './src/assert.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'assert.umd.js', // File name for UMD build
      library: 'TigerAssert', // Global variable for browser usage
      libraryTarget: 'umd', // Universal Module Definition (UMD)
      globalObject: 'this', // Ensures compatibility with Node.js and browsers
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    mode: 'production',
  },
  // ES Module Build
  {
    entry: './src/assert.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'assert.esm.js', // File name for ES module build
      library: {
        type: 'module', // Output as ES module
      },
    },
    experiments: {
      outputModule: true, // Enable module output
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    mode: 'production',
  },
];
