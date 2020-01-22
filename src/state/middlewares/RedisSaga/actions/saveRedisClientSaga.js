import { SAVE_REDIS_CLIENT, SET_FORM_DATA_ERROR } from "./../../../../constants/RedisClientsConstants";
import { put, select } from "redux-saga/effects";

import { SUCCESS } from "./../../../../constants/BaseConstants";
import getErrorsCount from "../../../../helpers/getErrorsCount";
import getFormDataSelector from "./../../../selectors/getFormDataSelector";
import validateFormData from "../../../../helpers/validateFormData";

export default function* saveRedisClientSaga() {
    try {
        const data = yield select(getFormDataSelector);
        let formKeyErrors = validateFormData(data);
        const errorsNumber = getErrorsCount(formKeyErrors);
        if (errorsNumber) {
            yield put({ type: SET_FORM_DATA_ERROR, formKeyErrors });
        } else {
            yield put({ type: SAVE_REDIS_CLIENT + SUCCESS, client: data });
        }
    } catch (error) {}
}
