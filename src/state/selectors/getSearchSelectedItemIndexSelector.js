import { createSelector } from "reselect";
import getSearchSelector from "./getSearchSelector";

export default createSelector(getSearchSelector, ({ selectedItemIndex }) => selectedItemIndex);
