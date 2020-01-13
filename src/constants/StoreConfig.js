import { REDIS_CLIENTS_REDUCER_NAME, STORE_KEY, STORE_VERSION } from "./StoreConstants";

import { RedisClientsReducerTransform } from "./../state/reducers/RedisClientsReducer";
import storage from "redux-persist/lib/storage";

export default {
    version: STORE_VERSION,
    key: STORE_KEY,
    storage,
    debug: process.env.NODE_ENV === "development",
    whietelist: [REDIS_CLIENTS_REDUCER_NAME],
    blacklist: [],
    transforms: [RedisClientsReducerTransform]
};
