import { LIST_REDUCER_NAME } from "../../../constants/StoreConstants";

export default function getMaxLimitSelector(state) {
    return state[LIST_REDUCER_NAME].max;
}
