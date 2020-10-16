import { put, select } from "redux-saga/effects";

import { SUCCESS } from "../../../../constants/BaseConstants";
import { TOGGLE_MULTI_SELECTED_KEY } from "../../../../constants/RedisClientsConstants";
import getActiveConnectedClientKeysSelector from "../../../selectors/getActiveConnectedClientKeysSelector";
import getActiveConnectedClientSelectedKeysIndexesSelector from "../../../selectors/getActiveConnectedClientSelectedKeysIndexesSelector";
import getKeyIndexSelector from "../../../selectors/getKeyIndexSelector";

export default function* toggleMultiSelectedKeySaga({ selectedKey }) {
    try {
        const keys = yield select(getActiveConnectedClientKeysSelector);
        const selectedKeyIndex = yield select((state) => getKeyIndexSelector(state, selectedKey));
        const selectedKeysIndexes = yield select(getActiveConnectedClientSelectedKeysIndexesSelector);
        const nearestIndex = [...selectedKeysIndexes].sort((a, b) => Math.abs(a - selectedKeyIndex) - Math.abs(b - selectedKeyIndex))[0];
        const minIndex = Math.min(selectedKeyIndex, nearestIndex);
        const maxIndex = Math.max(selectedKeyIndex, nearestIndex);
        const selectableKeys = keys.slice(minIndex, maxIndex + 1);
        yield put({ type: TOGGLE_MULTI_SELECTED_KEY + SUCCESS, addedSelectedKeys: selectableKeys });
    } catch (error) {}
}
