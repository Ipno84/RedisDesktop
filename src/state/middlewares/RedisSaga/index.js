import addRedisClientWatcher from "./watchers/addRedisClientWatcher";
import connectRedisWatcher from "./watchers/connectRedisWatcher";
import { fork } from "redux-saga/effects";

export default function* RedisSaga() {
    yield fork(connectRedisWatcher);
    yield fork(addRedisClientWatcher);
}
