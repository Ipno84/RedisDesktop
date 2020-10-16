import { createSelector } from "reselect";
import getActiveConnectedClientSelector from "./getActiveConnectedClientSelector";

export default createSelector(getActiveConnectedClientSelector, connectedClient =>
    connectedClient && connectedClient.editedValue ? connectedClient.editedValue : ""
);
