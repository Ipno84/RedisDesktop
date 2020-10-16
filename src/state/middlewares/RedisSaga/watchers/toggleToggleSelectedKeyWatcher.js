import { TOGGLE_MULTI_SELECTED_KEY } from "./../../../../constants/RedisClientsConstants";
import { takeLatest } from "redux-saga/effects";
import toggleMultiSelectedKeySaga from "./../actions/toggleMultiSelectedKeySaga";

export default function* toggleToggleSelectedKeyWatcher() {
    yield takeLatest(TOGGLE_MULTI_SELECTED_KEY, toggleMultiSelectedKeySaga);
}
