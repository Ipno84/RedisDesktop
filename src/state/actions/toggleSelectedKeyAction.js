import { TOGGLE_SELECTED_KEY } from "./../../constants/RedisClientsConstants";

export default function toggleSelectedKeyAction(selectedKey) {
    return {
        type: TOGGLE_SELECTED_KEY,
        selectedKey,
    };
}
