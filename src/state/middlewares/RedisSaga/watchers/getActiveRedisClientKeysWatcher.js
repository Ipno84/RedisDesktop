import { GET_ACTIVE_REDIS_CLIENT_KEYS } from "./../../../../constants/RedisClientsConstants";
import getActiveRedisClientKeysSaga from "./../actions/getActiveRedisClientKeysSaga";
import { takeLatest } from "redux-saga/effects";

export default function* getActiveRedisClientKeysWatcher() {
    yield takeLatest(GET_ACTIVE_REDIS_CLIENT_KEYS, getActiveRedisClientKeysSaga);
}
