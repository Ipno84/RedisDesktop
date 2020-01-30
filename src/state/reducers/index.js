import { LIST_REDUCER_NAME, REDIS_CLIENTS_REDUCER_NAME } from "./../../constants/StoreConstants";

import ListReducer from "./ListReducer";
import RedisClientsReducer from "./RedisClientsReducer";

export default {
    [REDIS_CLIENTS_REDUCER_NAME]: RedisClientsReducer,
    [LIST_REDUCER_NAME]: ListReducer
};
