import { LIST_REDUCER_NAME } from "../../../constants/StoreConstants";

export default function getObserverSelector(state) {
    return state[LIST_REDUCER_NAME].observer;
}
