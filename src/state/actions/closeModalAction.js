import { CLOSE_MODAL } from "../../constants/RedisClientsConstants";

export default function(index) {
    return {
        type: CLOSE_MODAL,
        index
    };
}
