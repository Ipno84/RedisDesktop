import { SET_CURRENT_KEY } from "../../constants/RedisClientsConstants";

export default function setActiveRedisSelectedKeyAction(selectedKey) {
    return {
        type: SET_CURRENT_KEY,
        selectedKey
    };
}
