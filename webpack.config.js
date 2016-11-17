module.exports = {
entry: {
    app: ['./main.js']
},
output: {
    filename: 'bundle.js'
},
module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['babel?presets[]=es2015'],
        exclude: /node_modules/
    }]
}
}
