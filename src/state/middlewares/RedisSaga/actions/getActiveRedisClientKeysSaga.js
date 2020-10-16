import { SET_ACTIVE_REDIS_CLIENT_KEYS } from "../../../../constants/RedisClientsConstants";
import getActiveConnectedClientSelector from "../../../selectors/getActiveConnectedClientSelector";
import { select } from "redux-saga/effects";
import { store } from "./../../../store";

export default function* getActiveRedisClientKeysSaga({ value }) {
    try {
        const client = yield select(getActiveConnectedClientSelector);
        if (client && client.client) {
            client.client.keys(`${value}`, function(err, res) {
                if (res) store.dispatch({ type: SET_ACTIVE_REDIS_CLIENT_KEYS, keys: res.sort() });
            });
        }
    } catch (error) {}
}
