import { createSelector } from "reselect";
import getSelectedRedisClientDataSelector from "./getSelectedRedisClientDataSelector";

export default createSelector(getSelectedRedisClientDataSelector, selectedRedisClient => selectedRedisClient.password);
