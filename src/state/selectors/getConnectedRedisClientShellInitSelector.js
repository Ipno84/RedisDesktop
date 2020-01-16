import { createSelector } from "reselect";
import getConnectedRedisClientHostSelector from "./getConnectedRedisClientHostSelector";
import getConnectedRedisClientPortSelector from "./getConnectedRedisClientPortSelector";

export default createSelector(getConnectedRedisClientHostSelector, getConnectedRedisClientPortSelector, (host, port) => {
    let commands = [];
    if (host) commands.push(host);
    if (port) commands.push(port);
    return `${commands.join(":")}> `;
});
