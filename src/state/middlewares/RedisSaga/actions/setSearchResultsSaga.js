import getSearchResultsCountSelector from "./../../../selectors/getSearchResultsCountSelector";
import getSearchResultsSelector from "./../../../selectors/getSearchResultsSelector";
import { select } from "redux-saga/effects";

export default function* setSearchResultsSaga() {
    try {
        const searchResultsCount = yield select(getSearchResultsCountSelector);
        const searchResults = yield select(getSearchResultsSelector);

        const tokens = document.querySelectorAll(".token");
        tokens.forEach(token => {
            if (token.classList.contains("searched") && !searchResults.find(e => e.isSameNode(token))) {
                token.classList.remove("searched");
            }
        });
        if (searchResultsCount) {
            searchResults.forEach(searchResult => !searchResult.classList.contains("searched") && searchResult.classList.add("searched"));
        }
    } catch (error) {}
}
