const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),  //깃허브 연동을 위해 docs로 변경
    filename: 'app.bundle.js',
    clean: true,
  },
  module: { 
    rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
          exclude: /node_modules/, 
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',//바벨을 웹팩에서 사용할 수 있게 해주는 로더 
              options: {
                presets: [
                  '@babel/preset-env',
                  ['@babel/preset-react', { runtime: 'automatic' }], // babel/preset-env - 여러 환경에 맞게 JavaScript를 동작, babel/preset-react - 리액트를 위한 플러그인 모음
                ],
              },
            },
          },
      ],
},
  plugins: [new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html") 
    })],
};