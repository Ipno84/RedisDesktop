import { ADD_REDIS_CLIENT } from "./../../../../constants/RedisClientsConstants";
import addRedisClientSaga from "./../actions/addRedisClientSaga";
import { takeLatest } from "redux-saga/effects";

export default function* addRedisClientWatcher() {
    yield takeLatest(ADD_REDIS_CLIENT, addRedisClientSaga);
}
