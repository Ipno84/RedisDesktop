import { DELETE_REMOTE_KEY } from "./../../constants/RedisClientsConstants";

export default function deleteRemoteKeyAction(key) {
    return {
        type: DELETE_REMOTE_KEY,
        key
    };
}
