import { REDIS_CLIENTS_REDUCER_NAME } from "../../constants/StoreConstants";

export default function getRedisClientsSelector(state) {
    return state[REDIS_CLIENTS_REDUCER_NAME].clients;
}
