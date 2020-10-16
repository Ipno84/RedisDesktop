import { createSelector } from "reselect";
import getActiveConnectedClientKeysSelector from "./getActiveConnectedClientKeysSelector";
import getActiveConnectedClientSelectedKeysSelector from "./getActiveConnectedClientSelectedKeysSelector";

export default createSelector([getActiveConnectedClientSelectedKeysSelector, getActiveConnectedClientKeysSelector], (selectedKeys, keys) => {
    return selectedKeys.map((e) => keys.indexOf(e));
});
