import { LIST_REDUCER_NAME } from "../../../constants/StoreConstants";

export default function getIndexesSelector(state) {
    return state[LIST_REDUCER_NAME].indexes;
}
