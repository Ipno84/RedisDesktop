import { REMOVE_REDIS_ClIENT } from "./../../constants/RedisClientsConstants";

export default function removeRedisClientAction() {
    return {
        type: REMOVE_REDIS_ClIENT
    };
}
