import { SET_REMOTE_VALUE } from "./../../constants/RedisClientsConstants";

export default function setRemoteValueAction() {
    return {
        type: SET_REMOTE_VALUE
    };
}
