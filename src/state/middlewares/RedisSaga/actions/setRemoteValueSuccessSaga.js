import getActiveConnectedClientKeyEditedValueSelector from "../../../selectors/getActiveConnectedClientKeyEditedValueSelector";
import getActiveConnectedClientSelectedKeySelector from "../../../selectors/getActiveConnectedClientSelectedKeySelector";
import getActiveConnectedClientSelector from "../../../selectors/getActiveConnectedClientSelector";
import { select } from "redux-saga/effects";
import unserialize from "../../../../helpers/unserialize";

export default function* setRemoteValueSuccessSaga() {
    try {
        const client = yield select(getActiveConnectedClientSelector);
        const selectedKey = yield select(getActiveConnectedClientSelectedKeySelector);
        const editedValue = yield select(getActiveConnectedClientKeyEditedValueSelector);
        if (client && client.client) {
            unserialize(editedValue);
            client.client.set(selectedKey, editedValue);
        }
    } catch (error) {
        console.error("open modal", error.message);
    }
}
