import { put, select } from "redux-saga/effects";

import { DELETE_REMOTE_KEY } from "../../../../constants/RedisClientsConstants";
import { SUCCESS } from "../../../../constants/BaseConstants";
import getActiveConnectedClientSelector from "../../../selectors/getActiveConnectedClientSelector";
import getDeletingKeySelector from "../../../selectors/getDeletingKeySelector";

export default function* deleteRemoteKeyConfirmSaga() {
    try {
        const client = yield select(getActiveConnectedClientSelector);
        const deletingKey = yield select(getDeletingKeySelector);
        if (client && client.client) {
            client.client.del(deletingKey);
            yield put({ type: DELETE_REMOTE_KEY + SUCCESS });
        }
    } catch (error) {
        console.error(error);
    }
}
