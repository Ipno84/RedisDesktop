import { createSelector } from "reselect";
import getActiveConnectedClientSelectedKeySelector from "./getActiveConnectedClientSelectedKeySelector";

export default createSelector(getActiveConnectedClientSelectedKeySelector, selectedKey => Boolean(selectedKey));
