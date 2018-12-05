module.exports = {
  mode: 'development',
  entry: "./src/game.jsx",
  output: {
    filename: 'game.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
};