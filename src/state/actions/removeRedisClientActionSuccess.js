import { REMOVE_REDIS_ClIENT } from "./../../constants/RedisClientsConstants";
import { SUCCESS } from "../../constants/BaseConstants";

export default function removeRedisClientActionSuccess() {
    return {
        type: REMOVE_REDIS_ClIENT + SUCCESS
    };
}
