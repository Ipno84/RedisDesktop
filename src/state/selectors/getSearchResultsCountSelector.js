import { createSelector } from "reselect";
import getSearchResultsSelector from "./getSearchResultsSelector";

export default createSelector(getSearchResultsSelector, results => results.length);
