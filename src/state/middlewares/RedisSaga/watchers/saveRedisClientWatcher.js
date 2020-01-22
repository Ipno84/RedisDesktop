import { SAVE_REDIS_CLIENT } from "./../../../../constants/RedisClientsConstants";
import saveRedisClientSaga from "./../actions/saveRedisClientSaga";
import { takeLatest } from "redux-saga/effects";

export default function* saveRedisClientWatcher() {
    yield takeLatest(SAVE_REDIS_CLIENT, saveRedisClientSaga);
}
