import { SET_CURRENT_VALUE } from "../../../../constants/RedisClientsConstants";
import getActiveConnectedClientSelector from "../../../selectors/getActiveConnectedClientSelector";
import { select } from "redux-saga/effects";
import { store } from "./../../../store";

export default function* getActiveRedisKeySaga({ selectedKey }) {
    try {
        const client = yield select(getActiveConnectedClientSelector);
        if (client && client.client) {
            client.client.get(selectedKey, (err, res) => {
                store.dispatch({ type: SET_CURRENT_VALUE, value: res });
            });
        }
    } catch (error) {}
}
