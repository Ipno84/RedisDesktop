import { TOGGLE_MULTI_SELECTED_KEY } from "./../../constants/RedisClientsConstants";

export default function toggleMultiSelectedKeyAction(selectedKey) {
    return {
        type: TOGGLE_MULTI_SELECTED_KEY,
        selectedKey,
    };
}
