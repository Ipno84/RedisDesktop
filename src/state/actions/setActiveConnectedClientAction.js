import { SET_ACTIVE_CONNECTED_CLIENT_INDEX } from "./../../constants/RedisClientsConstants";

export default function setActiveConnectedClientAction(index) {
    return {
        type: SET_ACTIVE_CONNECTED_CLIENT_INDEX,
        index
    };
}
