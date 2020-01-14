import { createSelector } from "reselect";
import getRedisClientsSelector from "./getRedisClientsSelector";
import getSelectedClientIndexSelector from "./getSelectedClientIndexSelector";

export default createSelector(getRedisClientsSelector, getSelectedClientIndexSelector, (redisClients, selectedRedisClientIndex) => {
    if (selectedRedisClientIndex === -1) return {};
    return redisClients[selectedRedisClientIndex];
});
