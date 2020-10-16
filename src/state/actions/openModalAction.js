import { OPEN_MODAL } from "../../constants/RedisClientsConstants";

export default function(modal) {
    return {
        type: OPEN_MODAL,
        modal
    };
}
