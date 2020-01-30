import { createSelector } from "reselect";
import getSearchResultsCountSelector from "./../getSearchResultsCountSelector";
import getSearchResultsSelector from "./../getSearchResultsSelector";

export default createSelector(
    getSearchResultsSelector,
    getSearchResultsCountSelector,
    (_, index) => index,
    (results, count, index) => results.indexOf(index) > -1
);
