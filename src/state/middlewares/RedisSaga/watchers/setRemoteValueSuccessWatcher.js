import { SET_REMOTE_VALUE } from "./../../../../constants/RedisClientsConstants";
import { SUCCESS } from "./../../../../constants/BaseConstants";
import setRemoteValueSuccessSaga from "./../actions/setRemoteValueSuccessSaga";
import { takeLatest } from "redux-saga/effects";

export default function* setRemoteValueSuccessWatcher() {
    yield takeLatest(SET_REMOTE_VALUE + SUCCESS, setRemoteValueSuccessSaga);
}
