import { SET_INDEXES } from "./../../../../constants/ListConstants";
import setIndexesSaga from "./../actions/setIndexesSaga";
import { takeLatest } from "redux-saga/effects";

export default function* setIndexesWatcher() {
    yield takeLatest(SET_INDEXES, setIndexesSaga);
}
