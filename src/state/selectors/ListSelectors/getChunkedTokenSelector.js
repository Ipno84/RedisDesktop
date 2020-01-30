import { createSelector } from "reselect";
import getChunkedTokensSelector from "./getChunkedTokensSelector";

export default createSelector(
    getChunkedTokensSelector,
    (_, index) => index,
    (chunkedTokens, index) => (chunkedTokens && chunkedTokens[index] ? chunkedTokens[index] : [])
);
