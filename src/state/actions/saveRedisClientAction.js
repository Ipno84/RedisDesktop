import { SAVE_REDIS_CLIENT } from "./../../constants/RedisClientsConstants";

export default function saveRedisClientAction() {
    return {
        type: SAVE_REDIS_CLIENT
    };
}
