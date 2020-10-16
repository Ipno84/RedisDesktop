import { put, select } from "redux-saga/effects";

import { DELETE_REMOTE_KEYS } from "../../../../constants/RedisClientsConstants";
import { SUCCESS } from "../../../../constants/BaseConstants";
import getActiveConnectedClientSelector from "../../../selectors/getActiveConnectedClientSelector";
import getDeletingKeysSelector from "../../../selectors/getDeletingKeysSelector";

export default function* deleteRemoteKeysConfirmSaga() {
    try {
        const client = yield select(getActiveConnectedClientSelector);
        const deletingKeys = yield select(getDeletingKeysSelector);
        if (client && client.client) {
            deletingKeys.forEach((e) => {
                client.client.del(e);
            });
            yield put({ type: DELETE_REMOTE_KEYS + SUCCESS });
        }
    } catch (error) {
        console.error(error);
    }
}
