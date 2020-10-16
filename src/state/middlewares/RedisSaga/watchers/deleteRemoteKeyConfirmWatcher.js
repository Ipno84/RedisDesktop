import { CONFIRM } from "./../../../../constants/BaseConstants";
import { DELETE_REMOTE_KEY } from "./../../../../constants/RedisClientsConstants";
import deleteRemoteKeyConfirmSaga from "./../actions/deleteRemoteKeyConfirmSaga";
import { takeLatest } from "redux-saga/effects";

export default function* deleteRemoteKeyConfirmWatcher() {
    yield takeLatest(DELETE_REMOTE_KEY + CONFIRM, deleteRemoteKeyConfirmSaga);
}
