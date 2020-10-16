import { createSelector } from "reselect";
import getActiveConnectedClientSelector from "./getActiveConnectedClientSelector";

export default createSelector(getActiveConnectedClientSelector, connectedClient => (connectedClient && connectedClient.value ? connectedClient.value : ""));
