import { CONFIRM } from "./../../constants/BaseConstants";
import { DELETE_REMOTE_KEY } from "./../../constants/RedisClientsConstants";

export default function deleteRemoteKeyConfirmAction() {
    return {
        type: DELETE_REMOTE_KEY + CONFIRM
    };
}
