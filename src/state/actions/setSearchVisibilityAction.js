import { SET_SEARCH_VISIBILITY } from "./../../constants/RedisClientsConstants";

export default function setSearchVisibilityAction(isActive) {
    return {
        type: SET_SEARCH_VISIBILITY,
        isActive
    };
}
