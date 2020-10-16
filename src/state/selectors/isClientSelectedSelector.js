import { createSelector } from "reselect";
import getSelectedClientIndexSelector from "./getSelectedClientIndexSelector";

export default createSelector(
    getSelectedClientIndexSelector,
    (_, index) => index,
    (selectedIndex, index) => selectedIndex === index
);
