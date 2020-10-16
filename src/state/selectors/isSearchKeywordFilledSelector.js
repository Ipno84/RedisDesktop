import { createSelector } from "reselect";
import getSearchKeywordSelector from "./getSearchKeywordSelector";

export default createSelector(getSearchKeywordSelector, keyword => Boolean(keyword.length));
