const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'festo-editor.js'
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      'node_modules': path.resolve(__dirname, 'node_modules')
    },
    extensions: ['.js', '.jsx'],
    modules: ['node_modules']
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.jsx|js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss|\.css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    after: function () {
      console.log('DEV-SERVER::AFTER::')
    }
  }
}
