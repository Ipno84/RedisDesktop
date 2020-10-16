import { SET_REMOTE_VALUE } from "./../../constants/RedisClientsConstants";
import { SUCCESS } from "./../../constants/BaseConstants";

export default function setRemoteValueSuccessAction() {
    return {
        type: SET_REMOTE_VALUE + SUCCESS
    };
}
