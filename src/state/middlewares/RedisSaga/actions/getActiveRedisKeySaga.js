import { SET_CURRENT_VALUE } from "../../../../constants/RedisClientsConstants";
import getActiveConnectedClientSelector from "../../../selectors/getActiveConnectedClientSelector";
import var_dump from "locutus/php/var/var_dump";
import { select } from "redux-saga/effects";
import { store } from "./../../../store";
import unserialize from "locutus/php/var/unserialize";

export default function* getActiveRedisKeySaga({ selectedKey }) {
    try {
        const client = yield select(getActiveConnectedClientSelector);
        if (client && client.client) {
            client.client.get(selectedKey, (err, res) => {
                console.log(var_dump(unserialize(res)), unserialize(res));
                store.dispatch({ type: SET_CURRENT_VALUE, value: res });
            });
        }
    } catch (error) {}
}
