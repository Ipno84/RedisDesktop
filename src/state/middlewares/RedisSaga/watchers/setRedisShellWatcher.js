import { SET_REDIS_SHELL } from "./../../../../constants/RedisClientsConstants";
import setRedisShellSaga from "./../actions/setRedisShellSaga";
import { takeLatest } from "redux-saga/effects";

export default function* setRedisShellWatcher() {
    yield takeLatest(SET_REDIS_SHELL, setRedisShellSaga);
}
