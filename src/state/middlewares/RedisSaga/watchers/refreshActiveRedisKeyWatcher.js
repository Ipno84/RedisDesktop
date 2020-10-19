import { REFRESH_CURRENT_KEY } from "./../../../../constants/RedisClientsConstants";
import getActiveRedisKeySaga from "./../actions/getActiveRedisKeySaga";
import { takeLatest } from "redux-saga/effects";

export default function* refreshActiveRedisKeyWatcher() {
    yield takeLatest(REFRESH_CURRENT_KEY, getActiveRedisKeySaga);
}
