import { createSelector } from "reselect";
import getConnectedRedisClientHostSelector from "./getConnectedRedisClientHostSelector";
import getConnectedRedisClientPasswordSelector from "./getConnectedRedisClientPasswordSelector";
import getConnectedRedisClientPortSelector from "./getConnectedRedisClientPortSelector";
import { remote } from "electron";

const redisCliPath = remote.getGlobal("redisCliPath");

export default createSelector(
    getConnectedRedisClientHostSelector,
    getConnectedRedisClientPortSelector,
    getConnectedRedisClientPasswordSelector,
    (host, port, password) => {
        let commands = ["node", redisCliPath];
        if (host) commands.push(`-h ${host}`);
        if (port) commands.push(`-p ${port}`);
        if (password) commands.push(`-a ${password}`);
        return commands.join(" ");
    }
);
