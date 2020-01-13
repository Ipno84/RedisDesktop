import { ADD_REDIS_CLIENT, SET_FORM_DATA_ERROR } from "./../../../../constants/RedisClientsConstants";
import { put, select } from "redux-saga/effects";

import { SUCCESS } from "./../../../../constants/BaseConstants";
import getFormDataSelector from "./../../../selectors/getFormDataSelector";
import redisClientNameExistsSelector from "./../../../selectors/redisClientNameExistsSelector";
import validateRequiredFormData from "../../../../helpers/validateRequiredFormData";

export default function* addRedisClientSaga() {
    try {
        const data = yield select(getFormDataSelector);
        let formKeyErrors = validateRequiredFormData(data, ["name", "host"], ["Nome", "Host"]);
        const redisClientExists = yield select(redisClientNameExistsSelector, data.name);
        if (redisClientExists) {
            const message = `Esiste già un client denominato ${data.name} fra i preferiti`;
            formKeyErrors = {
                ...formKeyErrors,
                name: formKeyErrors.name ? [...formKeyErrors.name, message] : [message]
            };
        }
        if (Object.keys(formKeyErrors).length) {
            yield put({ type: SET_FORM_DATA_ERROR, formKeyErrors });
        } else {
            yield put({ type: ADD_REDIS_CLIENT + SUCCESS, client: data });
        }
    } catch (error) {}
}
