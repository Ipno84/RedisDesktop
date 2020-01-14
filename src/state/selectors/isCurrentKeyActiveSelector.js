import { createSelector } from "reselect";
import getActiveConnectedClientSelectedKeySelector from "./getActiveConnectedClientSelectedKeySelector";

export default createSelector(
    getActiveConnectedClientSelectedKeySelector,
    (_, key) => key,
    (selectedKey, key) => selectedKey === key
);
