import { createSelector } from "reselect";
import getActiveConnectedClientIndexSelector from "./getActiveConnectedClientIndexSelector";
import getConnectedRedisClientsSelector from "./getConnectedRedisClientsSelector";

export default createSelector(getConnectedRedisClientsSelector, getActiveConnectedClientIndexSelector, (connectedClients, index) => connectedClients[index]);
