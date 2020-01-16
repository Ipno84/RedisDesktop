function overrideDevServer(config) {
    config.writeToDisk = true;
    config.quiet = false;
    config.hot = false;
    config.open = false;
    config.historyApiFallback = true;
    return config;
}

module.exports = overrideDevServer;
