const overrideWebpackDev = require("./overrideWebpackDev");
const overrideDevServer = require("./overrideDevServer");

module.exports = {
    webpack: (config, env) => overrideWebpackDev(config, env),
    devServer: configFunction => (proxy, allowedHost) => overrideDevServer(configFunction(proxy, allowedHost))
};
