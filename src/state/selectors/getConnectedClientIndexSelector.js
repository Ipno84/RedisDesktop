import { createSelector } from "reselect";
import getConnectedRedisClientsSelector from "./getConnectedRedisClientsSelector";

export default createSelector(
    getConnectedRedisClientsSelector,
    (_, client) => client,
    (connectedClients, client) => connectedClients.map(e => e.name).indexOf(client.name)
);
