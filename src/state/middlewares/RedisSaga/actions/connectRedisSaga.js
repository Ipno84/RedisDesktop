import { CONNECT_REDIS_CLIENT, SET_ACTIVE_CONNECTED_CLIENT_INDEX, SET_FORM_DATA_ERROR } from "../../../../constants/RedisClientsConstants";
import { put, select } from "redux-saga/effects";

import Redis from "ioredis";
import { SUCCESS } from "../../../../constants/BaseConstants";
import getConnectedClientIndexSelector from "../../../selectors/getConnectedClientIndexSelector";
import getFormDataSelector from "./../../../selectors/getFormDataSelector";
import getSelectedRedisClientDataSelector from "./../../../selectors/getSelectedRedisClientDataSelector";
import validateRequiredFormData from "../../../../helpers/validateRequiredFormData";

export default function* connectRedisSaga({ isForm }) {
    try {
        let data, formKeyErrors;
        if (isForm) {
            data = yield select(getFormDataSelector);
            formKeyErrors = validateRequiredFormData(data, ["name", "host"], ["Nome", "Host"]);
            if (Object.keys(formKeyErrors).length) {
                yield put({ type: SET_FORM_DATA_ERROR, formKeyErrors });
            }
        } else {
            data = yield select(getSelectedRedisClientDataSelector);
            formKeyErrors = validateRequiredFormData(data, ["name", "host"], ["Nome", "Host"]);
        }
        if (Object.keys(formKeyErrors).length === 0) {
            const connectedClientIndex = yield select(getConnectedClientIndexSelector, data);
            if (connectedClientIndex > -1) {
                yield put({ type: SET_ACTIVE_CONNECTED_CLIENT_INDEX, index: connectedClientIndex });
            } else {
                let connectionData = {};
                if (data.port) connectionData.port = data.port;
                if (data.host) connectionData.host = data.host;
                if (data.password) connectionData.password = data.password;
                const connectedClient = new Redis(connectionData);
                yield put({ type: CONNECT_REDIS_CLIENT + SUCCESS, connectedClient: { ...data, client: connectedClient } });
            }
        }
    } catch (error) {}
}
