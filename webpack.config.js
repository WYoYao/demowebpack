var path=require('path');

module.exports={
    entry:"./src/app.js",
    output:{
        path:path.resolve(__dirname,"./dists"),
        filename:"bundles.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader"
            },
            {
                test:/\.scss/,
                loader:['style-loader','css-loader','scss-loader']
            }
        ]
    }
}