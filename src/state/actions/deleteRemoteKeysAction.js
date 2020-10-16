import { DELETE_REMOTE_KEYS } from "./../../constants/RedisClientsConstants";

export default function deleteRemoteKeysAction(keys) {
    return {
        type: DELETE_REMOTE_KEYS,
        keys,
    };
}
