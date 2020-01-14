import { DISCONNECT_REDIS_CLIENT } from "./../../constants/RedisClientsConstants";

export default function disconnectRedisClientAction(index) {
    return {
        type: DISCONNECT_REDIS_CLIENT,
        index
    };
}
