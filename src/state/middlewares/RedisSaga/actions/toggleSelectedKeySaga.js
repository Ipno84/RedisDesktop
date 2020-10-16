import { put, select } from "redux-saga/effects";

import { SUCCESS } from "./../../../../constants/BaseConstants";
import { TOGGLE_SELECTED_KEY } from "./../../../../constants/RedisClientsConstants";
import getActiveConnectedClientSelectedKeySelector from "../../../selectors/getActiveConnectedClientSelectedKeySelector";
import getActiveConnectedClientSelectedKeysSelector from "../../../selectors/getActiveConnectedClientSelectedKeysSelector";

export default function* toggleSelectedKeySaga({ selectedKey }) {
    try {
        let stateSelectedKeys = yield select(getActiveConnectedClientSelectedKeysSelector);
        let stateSelectedKey = yield select(getActiveConnectedClientSelectedKeySelector);
        if (stateSelectedKeys.indexOf(selectedKey) > -1) {
            stateSelectedKeys = stateSelectedKeys.filter((e) => e !== selectedKey);
        } else stateSelectedKeys = [...stateSelectedKeys, selectedKey];
        if (stateSelectedKey === selectedKey) {
            if (stateSelectedKeys.length > 0) {
                stateSelectedKey = stateSelectedKeys[0];
            } else stateSelectedKey = "";
        }
        yield put({ type: TOGGLE_SELECTED_KEY + SUCCESS, selectedKey: stateSelectedKey, selectedKeys: stateSelectedKeys });
    } catch (error) {}
}
