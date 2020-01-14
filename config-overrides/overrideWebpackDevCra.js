const overrideWebpackDev = () => config => {
    config.target = "electron-renderer";
    config.output.filename = "bundle.min.js";
    config.output.chunkFilename = "[name].min.js";
    config.optimization.splitChunks = {};
    return config;
};

module.exports = overrideWebpackDev;
