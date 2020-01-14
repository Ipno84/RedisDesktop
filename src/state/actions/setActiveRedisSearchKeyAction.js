import { SET_ACTIVE_REDIS_SEARCH_KEY } from "../../constants/RedisClientsConstants";

export default function setActiveRedisSearchKeyAction(searchKey) {
    return {
        type: SET_ACTIVE_REDIS_SEARCH_KEY,
        searchKey
    };
}
