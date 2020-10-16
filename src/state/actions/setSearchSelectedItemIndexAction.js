import { SET_SEARCH_SELECTED_ITEM_INDEX } from "./../../constants/RedisClientsConstants";

export default function setSearchSelectedItemIndexAction(selectedItemIndex) {
    return {
        type: SET_SEARCH_SELECTED_ITEM_INDEX,
        selectedItemIndex
    };
}
