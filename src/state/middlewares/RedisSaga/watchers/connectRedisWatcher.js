import { CONNECT_REDIS } from "./../../../../constants/RedisClientsConstants";
import connectRedisSaga from "./../actions/connectRedisSaga";
import { takeLatest } from "redux-saga/effects";

export default function* connectRedisWatcher() {
    yield takeLatest(CONNECT_REDIS, connectRedisSaga);
}
