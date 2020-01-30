import { applyMiddleware, createStore } from "redux";

import ListSaga from "./../../state/middlewares/ListSaga";
import RedisSaga from "./../../state/middlewares/RedisSaga";
import composeEnhancers from "./composeEnhancers";
import createReducer from "./createReducer";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import { persistStore } from "redux-persist";
import rootReducers from "./../reducers";

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
    let store = createStore(createReducer({}), initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));
    let persistor = persistStore(store, null, () => {
        store.getState();
    });

    store.asyncReducers = { ...rootReducers };
    store.injectReducer = (key, asyncReducer) => {
        if (!store.asyncReducers[key]) {
            store.asyncReducers[key] = asyncReducer;
            store.replaceReducer(createReducer(store.asyncReducers));
            persistor.persist();
        }
    };

    store.asyncSagas = {
        RedisSaga,
        ListSaga
    };
    store.injectSaga = (key, asyncSaga) => {
        function* combinedSagas() {
            yield fork(asyncSaga);
        }
        if (!store.asyncSagas[key]) {
            store.asyncSagas[key] = asyncSaga;
            sagaMiddleware.run(combinedSagas);
            persistor.persist();
        }
    };

    return { store, persistor };
}
const { store, persistor } = configureStore();

sagaMiddleware.run(combinedSaga);

function* combinedSaga() {
    yield fork(RedisSaga);
    yield fork(ListSaga);
}

export { store, persistor };
