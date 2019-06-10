const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const path = require('path')

const publicDirInput = path.resolve(__dirname, 'public')
const publicDirOutput = path.resolve(__dirname, 'dist')

const mode = process.env.NODE_ENV === 'development' ? 'development' : "production"
const entry = process.env.NODE_ENV === 'development' ?  './src/app.js' : './src/index.js'
const output = process.env.NODE_ENV === 'development' ? {} : {
  path: path.resolve(__dirname, 'dist'),
  filename: 'haru-ui.js',
  library: 'Haru',
  libraryTarget: 'umd'
}
const jsLoader = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader?cacheDirectory=true'
  }
}

const externals = process.env.NODE_ENV === 'produciton' ? {
  'vue': 'vue',
  'vue-router': 'vue-router'
} : {}
console.log('-----------------------ENV:'+JSON.stringify(mode)+'-----------------------')
module.exports = {
  mode,
  target: "web",
  entry,
  output,
  devServer: {
    contentBase: publicDirInput,
    noInfo: false
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      jsLoader
    ],
    
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    // new CopyWebpackPlugin([
    //   {
    //     from: publicDirInput,
    //     to: publicDirOutput
    //   }
    // ]),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.json', '.scss', '.css'],
    alias: {
      '@src': path.resolve('src'),
      '@mixins': path.resolve('src/mixins'),
      '@containers': path.resolve('src/components/ha-containers'),
      '@stuffings': path.resolve('src/components/ha-stuffings'),
      '@coordinater': path.resolve('src/coordinater'),
      '@materials': path.resolve('src/materials'),
      '@others': path.resolve('src/others'),
      '@utils': path.resolve('src/utils'),
      '@scss': path.resolve('src/scss'),
      '@icons': path.resolve('src/icons'),
      '@imgs': path.resolve('src/statics/imgs'),
    }
  },
  externals
}