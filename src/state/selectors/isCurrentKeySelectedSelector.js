import { createSelector } from "reselect";
import getActiveConnectedClientSelectedKeysSelector from "./getActiveConnectedClientSelectedKeysSelector";

export default createSelector(
    getActiveConnectedClientSelectedKeysSelector,
    (_, key) => key,
    (selectedKeys, key) => selectedKeys.indexOf(key) > -1
);
