import { CONNECT_REDIS_CLIENT } from "./../../constants/RedisClientsConstants";

export default function connectRedisClientAction(isForm) {
    return {
        type: CONNECT_REDIS_CLIENT,
        isForm
    };
}
