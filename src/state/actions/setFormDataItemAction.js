import { SET_FORM_DATA_ITEM } from "./../../constants/RedisClientsConstants";

export default function setFormDataItemAction(key, value, index) {
    return {
        type: SET_FORM_DATA_ITEM,
        key,
        value,
        index
    };
}
