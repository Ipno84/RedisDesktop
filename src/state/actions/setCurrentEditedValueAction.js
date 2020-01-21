import { SET_CURRENT_EDITED_VALUE } from "./../../constants/RedisClientsConstants";

export default function setCurrentEditedValueAction(editedValue) {
    return {
        type: SET_CURRENT_EDITED_VALUE,
        editedValue
    };
}
