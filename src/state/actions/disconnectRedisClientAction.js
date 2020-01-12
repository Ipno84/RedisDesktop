import { DISCONNECT_REDIS_CLIENT } from "./../../constants/RedisClientsConstants";

export default function disconnectRedisClientAction() {
    return {
        type: DISCONNECT_REDIS_CLIENT
    };
}
