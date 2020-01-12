import { ADD_REDIS_CLIENT, SET_FORM_DATA_ERROR } from "./../../../../constants/RedisClientsConstants";
import { put, select } from "redux-saga/effects";

import { SUCCESS } from "./../../../../constants/BaseConstants";
import getFormDataSelector from "./../../../selectors/getFormDataSelector";
import validateRequiredFormData from "../../../../helpers/validateRequiredFormData";

export default function* addRedisClientSaga() {
    try {
        const data = yield select(getFormDataSelector);
        const formErrors = validateRequiredFormData(data, ["name", "host"]);
        if (formErrors.length) {
            yield put({ type: SET_FORM_DATA_ERROR, formErrors });
            return;
        } else {
            yield put({ type: ADD_REDIS_CLIENT + SUCCESS, client: data });
        }
    } catch (error) {}
}
