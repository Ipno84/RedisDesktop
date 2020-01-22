import { createSelector } from "reselect";
import getConnectedRedisClientNameSelector from "./getConnectedRedisClientNameSelector";

export default createSelector(getConnectedRedisClientNameSelector, name => `${name}> `);
