import connectRedisWatcher from "./watchers/connectRedisWatcher";
import { fork } from "redux-saga/effects";

export default function* RedisSaga() {
    yield fork(connectRedisWatcher);
}
