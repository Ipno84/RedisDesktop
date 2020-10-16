import { TOGGLE_SELECTED_KEY } from "./../../../../constants/RedisClientsConstants";
import { takeLatest } from "redux-saga/effects";
import toggleSelectedKeySaga from "./../actions/toggleSelectedKeySaga";

export default function* toggleSelectedKeyWatcher() {
    yield takeLatest(TOGGLE_SELECTED_KEY, toggleSelectedKeySaga);
}
