import { createSelector } from "reselect";
import getActiveConnectedClientKeyValueSelector from "./getActiveConnectedClientKeyValueSelector";

export default createSelector(getActiveConnectedClientKeyValueSelector, value => value !== undefined);
