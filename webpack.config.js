const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CircularDependencyPlugin = require('circular-dependency-plugin')

const isProd = process.env.NODE_ENV === 'production'
const ASSET_PATH = isProd
  ? 'https://cdn.smartech.com/js-sdk/bundles/'
  : '/dist/umd/'

const plugins = [
  new CompressionPlugin({}),
  new webpack.EnvironmentPlugin({
    ASSET_PATH,
  }),
  new CircularDependencyPlugin({
    failOnError: true,
  })
]

if (process.env.ANALYZE) {
  plugins.push(new BundleAnalyzerPlugin())
}

const config = {
  node: {
    global: false, // do not polyfill global object, we can use getGlobal function if needed.
  },
  mode: process.env.NODE_ENV || 'development',
  // devtool: 'source-map',
  entry: {
    index: {
      import: path.resolve(__dirname, 'src/index.ts'),
      library: {
        name: 'Deepin',
        type: 'umd',
      },
    },
    standalone: {
      import: path.resolve(__dirname, 'src/index.ts'),
      library: {
        name: 'Deepin',
        type: 'window',
      },
    },
  },
  output: {
    publicPath: '', // Hack - we're overriding publicPath but IE needs this set or it won't load.
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/umd'),
    chunkFilename: '[name].bundle.[contenthash].js',
  },
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist/umd'),
  },
  optimization: {
    moduleIds: 'deterministic',
    minimize: isProd,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          ecma: '2015',
          mangle: true,
          compress: true,
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins,
}

module.exports = config
