import { all, put, select } from "redux-saga/effects";

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
        if (isSearchKeywordFilled) {
            const root = document.querySelector("[class*='language-']");
            if (root) {
                const res = [...root.children].filter(item => item.textContent.indexOf(searchKeyword) > -1);
                yield all([put(setSearchResultsAction(res)), put(setSearchSelectedItemIndexAction(0))]);
            }
        } else if (searchResultsCount !== 0) {
            yield all([put(setSearchResultsAction([])), put(setSearchSelectedItemIndexAction(-1))]);
        }
    } catch (error) {}
}
