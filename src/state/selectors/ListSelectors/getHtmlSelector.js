import { LIST_REDUCER_NAME } from "../../../constants/StoreConstants";

export default function getHtmlSelector(state) {
    return state[LIST_REDUCER_NAME].html;
}
