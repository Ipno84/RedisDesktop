import { REDIS_CLIENTS_REDUCER_NAME } from "../../constants/StoreConstants";

export default function getFormDataSelector(state) {
    return state[REDIS_CLIENTS_REDUCER_NAME].form;
}
