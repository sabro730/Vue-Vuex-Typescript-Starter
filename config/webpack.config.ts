const path = require('path');
const webpack = require('webpack');
const vuxLoader = require('vux-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DEBUG = process.env.NODE_ENV !== 'production';

const plugins = [
  /** 提取公共文件 */
  new webpack.optimize.CommonsChunkPlugin({
    name: [ 'index', 'vendor' ]
  })
];

if (DEBUG) {
  /** 热更新插件 */
  plugins.push(new webpack.HotModuleReplacementPlugin());

  /** 热更新插件配套插件 */
  plugins.push(new webpack.NamedModulesPlugin());

  /** 定义环境变量 */
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  );
} else {
  /** 编译前清空文件夹 */
  plugins.push(new CleanWebpackPlugin(['static/js'], {
    root: path.join(__dirname, '../'),
    verbose: true,
    dry: false
  }));
  /** 定义环境变量 */
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  );
  /** 压缩 js */
  // plugins.push(
  //   new webpack.optimize.UglifyJsPlugin({
  //     output: {
  //       comments: false
  //     },
  //     compress: {
  //       warnings: false
  //     }
  //   })
  // );
}

const webpackConfig = {
  entry: DEBUG ? {
    vendor: ['webpack-hot-middleware/client?noInfo=true', './src/vendor.ts'],
    index: ['webpack-hot-middleware/client?noInfo=true', './src/index.ts']
  } : {
    vendor: ['./src/vendor.ts'],
    index: ['./src/index.ts']
  },
  output: {
    filename: DEBUG ? '[name].js' : '[name].[chunkhash:8].js',
    path: path.join(__dirname, '../static/js'),
    publicPath: DEBUG ? '/static/' : '/static/js/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: { vue: 'vue/dist/vue.js' }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true,
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
         test: /\.less/,
         use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins
};

const config = vuxLoader.merge( webpackConfig, {
  plugins: ['vux-ui']
});

export default config;