import { DISCONNECT_REDIS_CLIENT } from "./../../../../constants/RedisClientsConstants";
import disconnectRedisSaga from "./../actions/disconnectRedisSaga";
import { takeLatest } from "redux-saga/effects";

export default function* disconnectRedisWatcher() {
    yield takeLatest(DISCONNECT_REDIS_CLIENT, disconnectRedisSaga);
}
