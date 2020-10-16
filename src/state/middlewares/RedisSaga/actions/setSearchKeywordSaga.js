import { all, put, select } from "redux-saga/effects";

import getChunkedTokensSelector from "./../../../selectors/ListSelectors/getChunkedTokensSelector";
import getSearchKeywordSelector from "./../../../selectors/getSearchKeywordSelector";
import getSearchResultsCountSelector from "./../../../selectors/getSearchResultsCountSelector";
import isSearchKeywordFilledSelector from "./../../../selectors/isSearchKeywordFilledSelector";
import setSearchResultsAction from "./../../../actions/setSearchResultsAction";
import setSearchSelectedItemIndexAction from "./../../../actions/setSearchSelectedItemIndexAction";

export default function* setSearchKeywordSaga() {
    try {
        const searchKeyword = yield select(getSearchKeywordSelector);
        const isSearchKeywordFilled = yield select(isSearchKeywordFilledSelector);
        const searchResultsCount = yield select(getSearchResultsCountSelector);
        const chukedTokens = yield select(getChunkedTokensSelector);
        if (isSearchKeywordFilled) {
            const foundIndex = chukedTokens
                .map(chukedToken => chukedToken.map(e => (typeof e === "object" && e.content.indexOf(searchKeyword) > -1 ? true : false)).indexOf(true) > -1)
                .map((e, i) => (e === true ? i : ""))
                .filter(String);
            if (foundIndex && foundIndex.length) {
                yield all([put(setSearchResultsAction(foundIndex)), put(setSearchSelectedItemIndexAction(0))]);
            }
        } else if (searchResultsCount !== 0) {
            yield all([put(setSearchResultsAction([])), put(setSearchSelectedItemIndexAction(-1))]);
        }
    } catch (error) {}
}
