import { createSelector } from "reselect";
import getActiveConnectedClientKeysSelector from "./getActiveConnectedClientKeysSelector";

export default createSelector(getActiveConnectedClientKeysSelector, keys => keys.length);
