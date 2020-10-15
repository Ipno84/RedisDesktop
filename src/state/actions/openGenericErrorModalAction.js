import { OPEN_GENERIC_ERROR_MODAL } from "./../../constants/RedisClientsConstants";

export default function openGenericErrorModalAction({ title, message }) {
    return {
        type: OPEN_GENERIC_ERROR_MODAL,
        title,
        message,
    };
}
