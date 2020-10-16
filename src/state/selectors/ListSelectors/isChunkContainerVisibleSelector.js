import { createSelector } from "reselect";
import getMaxLimitSelector from "./getMaxLimitSelector";
import getMinLimitSelector from "./getMinLimitSelector";

export default createSelector(
    getMinLimitSelector,
    getMaxLimitSelector,
    (_, index) => index,
    (min, max, index) => index >= min - 30 && index <= max + 30
);
