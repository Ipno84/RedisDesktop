import Config from "./../../constants/StoreConfig";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import rootReducers from "../reducers";

export default function createReducer(asyncReducers) {
    return persistReducer(
        Config,
        combineReducers({
            ...rootReducers,
            ...asyncReducers
        })
    );
}
