import { fork } from "redux-saga/effects";
import setIndexesWatcher from "./watchers/setIndexesWatcher";

export default function* ListSaga() {
    yield fork(setIndexesWatcher);
}
