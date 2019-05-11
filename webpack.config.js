const path = require('path');

//导入在内存中生成html页面的插件
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname,'./src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'vue-style-loader',
                'css-loader'
              ]
            },

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },

            {
              test: /\.(png|jpg|gif|ttf)$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192
                  }
                }
              ]
            },
            
            {
              test: /\.vue$/,
              use: 'vue-loader'
            },

            {
              test: /\.scss$/,
              use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
              ]
            }
        ]
    },
    resolve: {
        alias: {
            //修改vue导入时候包的路径
            "vue$": "vue/dist/vue.js"
        }
    }
}