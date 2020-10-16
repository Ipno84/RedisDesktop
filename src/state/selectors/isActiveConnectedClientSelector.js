import { createSelector } from "reselect";
import getActiveConnectedClientIndexSelector from "./getActiveConnectedClientIndexSelector";

export default createSelector(
    getActiveConnectedClientIndexSelector,
    (_, index) => index,
    (activeConnectedClientIndex, index) => activeConnectedClientIndex === index
);
