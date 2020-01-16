import { EDIT_REDIS_CLIENT } from "./../../constants/RedisClientsConstants";

export default function editRedisClientAction(index) {
    return {
        type: EDIT_REDIS_CLIENT,
        index
    };
}
