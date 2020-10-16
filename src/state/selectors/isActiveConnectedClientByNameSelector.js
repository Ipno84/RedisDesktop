import { createSelector } from "reselect";
import getConnectedRedisClientsSelector from "./getConnectedRedisClientsSelector";

export default createSelector(
    getConnectedRedisClientsSelector,
    (_, name) => name,
    (connectedClients, name) => connectedClients.map(e => e.name).includes(name)
);
