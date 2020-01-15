import { put, select } from "redux-saga/effects";

import { SET_REDIS_SHELL } from "../../../../constants/RedisClientsConstants";
import { SUCCESS } from "../../../../constants/BaseConstants";
import getActiveConnectedClientSelector from "../../../selectors/getActiveConnectedClientSelector";

export default function* setRedisShellSaga({ command, response }) {
    try {
        const connectedClient = yield select(getActiveConnectedClientSelector);
        let shell = {};
        if (command) {
            shell = {
                ...shell,
                command
            };
        } else if (response) {
            shell = connectedClient.shells[connectedClient.shells.length - 1];
            shell = {
                ...shell,
                response
            };
        }
        yield put({ type: SET_REDIS_SHELL + SUCCESS, shell });
    } catch (error) {}
}
