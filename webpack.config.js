var path=require('path');

module.exports={
    mode:"production",
    entry:"./src/app.js",
    output:{
        path:path.resolve(__dirname,"./dists"),
        filename:"bundles.js"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                  "babel-loader",
                //   "eslint-loader",
                ],
            },
            {
                test:/\.scss$/,
                loader:['style-loader','css-loader','postcss-loader','sass-loader']
            }
        ]
    }
}