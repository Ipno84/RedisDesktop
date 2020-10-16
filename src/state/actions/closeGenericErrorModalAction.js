import { CLOSE_GENERIC_ERROR_MODAL } from "./../../constants/RedisClientsConstants";

export default function closeGenericErrorModalAction() {
    return {
        type: CLOSE_GENERIC_ERROR_MODAL,
    };
}
