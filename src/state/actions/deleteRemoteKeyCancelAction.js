import { CANCEL } from "./../../constants/BaseConstants";
import { DELETE_REMOTE_KEY } from "./../../constants/RedisClientsConstants";

export default function deleteRemoteKeyCancelAction() {
    return {
        type: DELETE_REMOTE_KEY + CANCEL
    };
}
