import { ADD_REDIS_CLIENT, SET_FORM_DATA_ERROR } from "./../../../../constants/RedisClientsConstants";
import { put, select } from "redux-saga/effects";

import { SUCCESS } from "./../../../../constants/BaseConstants";
import getErrorsCount from "../../../../helpers/getErrorsCount";
import getFormDataSelector from "./../../../selectors/getFormDataSelector";
import redisClientNameExistsSelector from "./../../../selectors/redisClientNameExistsSelector";
import validateFormData from "../../../../helpers/validateFormData";

export default function* addRedisClientSaga() {
    try {
        const data = yield select(getFormDataSelector);
        let formKeyErrors = validateFormData(data);
        const redisClientExists = yield select(redisClientNameExistsSelector, data.name);
        if (redisClientExists) {
            const message = `Esiste già un client denominato ${data.name} fra i preferiti`;
            formKeyErrors = {
                ...formKeyErrors,
                name: formKeyErrors.name ? [...formKeyErrors.name, message] : [message]
            };
        }
        const errorsNumber = getErrorsCount(formKeyErrors);
        if (errorsNumber) {
            yield put({ type: SET_FORM_DATA_ERROR, formKeyErrors });
        } else {
            yield put({ type: ADD_REDIS_CLIENT + SUCCESS, client: data });
        }
    } catch (error) {}
}
