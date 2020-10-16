import { createSelector } from "reselect";
import getActiveConnectedClientKeysSelector from "./getActiveConnectedClientKeysSelector";

export default createSelector(
    getActiveConnectedClientKeysSelector,
    (_, key) => key,
    (selectedKeys, key) => selectedKeys.indexOf(key)
);
