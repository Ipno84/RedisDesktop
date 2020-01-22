import { createSelector } from "reselect";
import getConnectedRedisClientMasterSelector from "./getConnectedRedisClientMasterSelector";
import getConnectedRedisClientPasswordSelector from "./getConnectedRedisClientPasswordSelector";
import getConnectedRedisClientSentinelsSelector from "./getConnectedRedisClientSentinelsSelector";
import { remote } from "electron";

const redisCliPath = remote.getGlobal("redisCliPath");

export default createSelector(
    getConnectedRedisClientMasterSelector,
    getConnectedRedisClientPasswordSelector,
    getConnectedRedisClientSentinelsSelector,
    (master, password, sentinels) => {
        const host = sentinels[0].host;
        let port = sentinels[0].port;
        if (parseInt(port) === 26379) port = 6379;
        let commands = ["node", redisCliPath];
        if (host) commands.push(`-h ${host}`);
        if (port) commands.push(`-p ${port}`);
        if (password) commands.push(`-a ${password}`);
        return commands.join(" ");
    }
);
