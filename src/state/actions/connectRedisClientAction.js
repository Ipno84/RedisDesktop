import { CONNECT_REDIS_CLIENT } from "./../../constants/RedisClientsConstants";

export default function connectRedisClientAction() {
    return {
        type: CONNECT_REDIS_CLIENT
    };
}
