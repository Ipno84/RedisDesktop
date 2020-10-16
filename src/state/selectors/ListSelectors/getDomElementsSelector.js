import { LIST_REDUCER_NAME } from "../../../constants/StoreConstants";

export default function getDomElementsSelector(state) {
    return state[LIST_REDUCER_NAME].domElements;
}
