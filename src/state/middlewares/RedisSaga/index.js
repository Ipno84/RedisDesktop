import addRedisClientWatcher from "./watchers/addRedisClientWatcher";
import connectRedisWatcher from "./watchers/connectRedisWatcher";
import disconnectRedisWatcher from "./watchers/disconnectRedisWatcher";
import { fork } from "redux-saga/effects";
import getActiveRedisClientKeysWatcher from "./watchers/getActiveRedisClientKeysWatcher";
import getActiveRedisKeyWatcher from "./watchers/getActiveRedisKeyWatcher";
import setRedisShellWatcher from "./watchers/setRedisShellWatcher";

export default function* RedisSaga() {
    yield fork(connectRedisWatcher);
    yield fork(addRedisClientWatcher);
    yield fork(disconnectRedisWatcher);
    yield fork(getActiveRedisClientKeysWatcher);
    yield fork(getActiveRedisKeyWatcher);
    yield fork(setRedisShellWatcher);
}
