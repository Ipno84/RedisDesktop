import { createSelector } from "reselect";
import getConnectedRedisClientsSelector from "./getConnectedRedisClientsSelector";

export default createSelector(getConnectedRedisClientsSelector, connectedClients => {
    return Boolean(connectedClients.length);
});
