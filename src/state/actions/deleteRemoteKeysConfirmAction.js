import { CONFIRM } from "./../../constants/BaseConstants";
import { DELETE_REMOTE_KEYS } from "./../../constants/RedisClientsConstants";

export default function deleteRemoteKeysConfirmAction() {
    return {
        type: DELETE_REMOTE_KEYS + CONFIRM,
    };
}
