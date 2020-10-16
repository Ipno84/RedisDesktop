import { GET_ACTIVE_REDIS_CLIENT_KEYS } from "../../constants/RedisClientsConstants";

export default function getActiveRedisClientKeysAction(value) {
    return { type: GET_ACTIVE_REDIS_CLIENT_KEYS, value };
}
