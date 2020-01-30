import { SET_INDEXES, SET_LIMIT_INDEXES } from "./../../../../constants/ListConstants";
import { all, put, select } from "redux-saga/effects";

import { SUCCESS } from "./../../../../constants/BaseConstants";
import getDomElementsSelector from "./../../../selectors/ListSelectors/getDomElementsSelector";
import getIndexesSelector from "./../../../selectors/ListSelectors/getIndexesSelector";

export default function* addRedisClientSaga({ visible, notVisible }) {
    try {
        const domElements = yield select(getDomElementsSelector);
        const currentIndexes = yield select(getIndexesSelector);
        let nextIndexes = [...currentIndexes];
        const visibleIndexes = visible.map(entry => domElements.indexOf(entry.target));
        const notVisibleIndexes = notVisible.map(entry => domElements.indexOf(entry.target));
        visibleIndexes.forEach(visibleIndex => {
            nextIndexes = [...nextIndexes.slice(0, visibleIndex), true, ...nextIndexes.slice(visibleIndex + 1)];
        });
        notVisibleIndexes.forEach(notVisibleIndex => {
            nextIndexes = [...nextIndexes.slice(0, notVisibleIndex), false, ...nextIndexes.slice(notVisibleIndex + 1)];
        });
        let maxMinIndexes = nextIndexes.map((e, i) => (e ? i : null)).filter(e => e);
        if (maxMinIndexes.length === 0) maxMinIndexes = [-1];
        const min = Math.min(...maxMinIndexes) - 30;
        const max = Math.max(...maxMinIndexes) + 30;
        yield all([put({ type: SET_INDEXES + SUCCESS, indexes: nextIndexes }), put({ type: SET_LIMIT_INDEXES, min, max })]);
    } catch (error) {}
}
