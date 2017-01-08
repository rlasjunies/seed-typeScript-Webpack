module.exports = {
    entry: "./src/index",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.ts$/, 
                loader: "ts-loader" 
            }
        ]
    },
    resolve: {
        extensions: ["", ".ts", ".js"]
    }
};