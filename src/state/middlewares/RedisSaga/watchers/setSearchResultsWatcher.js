import { SET_SEARCH_RESULTS } from "./../../../../constants/RedisClientsConstants";
import setSearchResultsSaga from "./../actions/setSearchResultsSaga";
import { takeLatest } from "redux-saga/effects";

export default function* setSearchResultsWatcher() {
    yield takeLatest(SET_SEARCH_RESULTS, setSearchResultsSaga);
}
