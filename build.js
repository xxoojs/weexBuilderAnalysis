const webpack = require('webpack');
const path = require('path');
const sourcer = require('sourcer');

const source = sourcer.find(process.cwd(), [path.resolve('src')], {
    recursive: true
});
let entrys = {};

source.forEach(s => {
    let file = path.relative(path.resolve('src'), s);
    file = file.replace(/\.\w+$/, '');
    entrys[file] = s;
});

const config = {
    entry: entrys,
    output: {
        filename: '[name].js',
        path: __dirname + '/dest'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'stage-0']
              }
            }]
          },{
            test: /\.vue$/,
            use: [{ 
                loader: 'weex-loader',
                options: {
                    useVue: false,
                    cssSourceMap: true,
                    cacheBusting: true,
                    lang: {
                        less: ['less-loader'],
                        scss: ['sass-loader']
                    }
                }
            }]
        }]
    },
    // resolveLoader: {
    //     modules: [path.join(__dirname, '../node_modules'), path.resolve('node_modules')],
    //     extensions: ['.js', '.json'],
    //     mainFields: ['loader', 'main'],
    //     moduleExtensions: ['-loader'],
    //     alias: {
    //         'weex-loader': './loaders/weex-loader-master'
    //     }
    // },
    plugins: [
        new webpack.BannerPlugin({
            banner: `// { "framework": "Vue"}"} \n`,
            raw: true,
            exclude: 'Vue'
        })
    ],
    node: {
        setImmediate: false,
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}

const compiler = webpack(config);

compiler.run((err, stats) => {
    console.log(err);
});

// compiler.watch({
//     ignored: /node_modules/,
//     poll: 1000
// }, (err, stats) => {
//     console.log(err);
// });