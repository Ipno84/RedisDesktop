import { LIST_REDUCER_NAME } from "../../../constants/StoreConstants";

export default function getMinLimitSelector(state) {
    return state[LIST_REDUCER_NAME].min;
}
