const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, '../index.web'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出的路径
        filename: 'bundle.js'  // 打包后文件
    },
    resolve: {
        alias: {
          'react-native$': 'react-native-web'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
      port: 9000
    }
}