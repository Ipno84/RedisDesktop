import { CONFIRM } from "./../../../../constants/BaseConstants";
import { DELETE_REMOTE_KEYS } from "./../../../../constants/RedisClientsConstants";
import deleteRemoteKeysConfirmSaga from "./../actions/deleteRemoteKeysConfirmSaga";
import { takeLatest } from "redux-saga/effects";

export default function* deleteRemoteKeysConfirmWatcher() {
    yield takeLatest(DELETE_REMOTE_KEYS + CONFIRM, deleteRemoteKeysConfirmSaga);
}
