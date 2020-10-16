import { CANCEL } from "./../../constants/BaseConstants";
import { DELETE_REMOTE_KEYS } from "./../../constants/RedisClientsConstants";

export default function deleteRemoteKeysCancelAction() {
    return {
        type: DELETE_REMOTE_KEYS + CANCEL,
    };
}
