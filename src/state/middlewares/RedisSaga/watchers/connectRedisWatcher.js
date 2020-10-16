import { CONNECT_REDIS_CLIENT } from "./../../../../constants/RedisClientsConstants";
import connectRedisSaga from "./../actions/connectRedisSaga";
import { takeLatest } from "redux-saga/effects";

export default function* connectRedisWatcher() {
    yield takeLatest(CONNECT_REDIS_CLIENT, connectRedisSaga);
}
