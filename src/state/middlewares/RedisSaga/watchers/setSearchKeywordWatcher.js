import { SET_SEARCH_KEYWORD } from "./../../../../constants/RedisClientsConstants";
import setSearchKeywordSaga from "./../actions/setSearchKeywordSaga";
import { takeLatest } from "redux-saga/effects";

export default function* setSearchKeywordWatcher() {
    yield takeLatest(SET_SEARCH_KEYWORD, setSearchKeywordSaga);
}
