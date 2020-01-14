import { SET_CURRENT_KEY } from "./../../../../constants/RedisClientsConstants";
import getActiveRedisKeySaga from "./../actions/getActiveRedisKeySaga";
import { takeLatest } from "redux-saga/effects";

export default function* getActiveRedisKeyWatcher() {
    yield takeLatest(SET_CURRENT_KEY, getActiveRedisKeySaga);
}
