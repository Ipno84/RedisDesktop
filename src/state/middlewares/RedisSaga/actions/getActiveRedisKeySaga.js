import { all, call, select } from "redux-saga/effects";

import { SET_CURRENT_VALUE } from "../../../../constants/RedisClientsConstants";
import getActiveConnectedClientSelectedKeySelector from "../../../selectors/getActiveConnectedClientSelectedKeySelector";
import getActiveConnectedClientSelector from "../../../selectors/getActiveConnectedClientSelector";
import { store } from "./../../../store";

export default function* getActiveRedisKeySaga({ selectedKey }) {
    try {
        const client = yield select(getActiveConnectedClientSelector);
        if (!selectedKey) selectedKey = yield select(getActiveConnectedClientSelectedKeySelector);
        if (client && client.client) {
            const results = yield all({
                value: call(() => client.client.get(selectedKey)),
                ttl: call(() => client.client.ttl(selectedKey)),
            });
            store.dispatch({ type: SET_CURRENT_VALUE, ...results });
        }
    } catch (error) {}
}
