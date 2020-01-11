import { SET_SELECTED_CLIENT_INDEX } from "./../../constants/RedisClientsConstants";

export default function setSelectedClientIndexAction(index) {
    return {
        type: SET_SELECTED_CLIENT_INDEX,
        index
    };
}
