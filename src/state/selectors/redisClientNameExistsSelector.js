import { createSelector } from "reselect";
import getRedisClientsSelector from "./getRedisClientsSelector";

export default createSelector(
    getRedisClientsSelector,
    (_, name) => name,
    (redisClients, name) => redisClients.map(e => e.name).indexOf(name) > -1
);
