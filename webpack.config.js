const path = require('path');

module.exports = {
    entry: "./client/index.js",
    output: {
        path: path.resolve(__dirname, "public", "js"),
        filename: "bundle.js"
    },
    watch: true
}