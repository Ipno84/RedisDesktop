import { REFRESH_CURRENT_KEY } from "../../constants/RedisClientsConstants";

export default function refreshActiveRedisSelectedKeyAction() {
    return {
        type: REFRESH_CURRENT_KEY,
    };
}
