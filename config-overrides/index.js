const overrideWebpackDev = require("./overrideWebpackDev");
const overrideWebpackDevCra = require("./overrideWebpackDevCra");
const overrideDevServer = require("./overrideDevServer");
const { override, useBabelRc, addBabelPlugins } = require("customize-cra");

const configurationCra = {
    devServer: configFunction => (proxy, allowedHost) => overrideDevServer(configFunction(proxy, allowedHost)),
    webpack: override(
        overrideWebpackDevCra(),
        useBabelRc(),
        ...addBabelPlugins([
            "prismjs",
            {
                languages: ["javascript", "php", "json"],
                plugins: ["normalize-whitespace"],
                theme: "twilight",
                css: true
            }
        ])
    )
};

const configuration = {
    webpack: (config, env) => override(overrideWebpackDev(config, env)),
    devServer: configFunction => (proxy, allowedHost) => overrideDevServer(configFunction(proxy, allowedHost))
};

module.exports = configurationCra;
