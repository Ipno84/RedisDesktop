// const nodeExternals = require("webpack-node-externals");

function overrideWebpackDev(config, env) {
    config.target = "electron-renderer";
    config.output.filename = "bundle.min.js";
    config.output.chunkFilename = "[name].min.js";
    config.optimization.splitChunks = {};
    // config.externals = [nodeExternals()];
    return config;
}

module.exports = overrideWebpackDev;
