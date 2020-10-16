import addRedisClientWatcher from "./watchers/addRedisClientWatcher";
import connectRedisWatcher from "./watchers/connectRedisWatcher";
import deleteRemoteKeyConfirmWatcher from "./watchers/deleteRemoteKeyConfirmWatcher";
import deleteRemoteKeysConfirmWatcher from "./watchers/deleteRemoteKeysConfirmWatcher";
import disconnectRedisWatcher from "./watchers/disconnectRedisWatcher";
import { fork } from "redux-saga/effects";
import getActiveRedisClientKeysWatcher from "./watchers/getActiveRedisClientKeysWatcher";
import getActiveRedisKeyWatcher from "./watchers/getActiveRedisKeyWatcher";
import saveRedisClientWatcher from "./watchers/saveRedisClientWatcher";
import setRedisShellWatcher from "./watchers/setRedisShellWatcher";
import setRemoteValueSuccessWatcher from "./watchers/setRemoteValueSuccessWatcher";
import setSearchKeywordWatcher from "./watchers/setSearchKeywordWatcher";
import setSearchResultsWatcher from "./watchers/setSearchResultsWatcher";
import toggleSelectedKeyWatcher from "./watchers/toggleSelectedKeyWatcher";
import toggleToggleSelectedKeyWatcher from "./watchers/toggleToggleSelectedKeyWatcher";

export default function* RedisSaga() {
    yield fork(connectRedisWatcher);
    yield fork(addRedisClientWatcher);
    yield fork(disconnectRedisWatcher);
    yield fork(getActiveRedisClientKeysWatcher);
    yield fork(getActiveRedisKeyWatcher);
    yield fork(setRedisShellWatcher);
    yield fork(setSearchKeywordWatcher);
    yield fork(setSearchResultsWatcher);
    yield fork(setRemoteValueSuccessWatcher);
    yield fork(saveRedisClientWatcher);
    yield fork(deleteRemoteKeyConfirmWatcher);
    yield fork(deleteRemoteKeysConfirmWatcher);
    yield fork(toggleSelectedKeyWatcher);
    yield fork(toggleToggleSelectedKeyWatcher);
}
