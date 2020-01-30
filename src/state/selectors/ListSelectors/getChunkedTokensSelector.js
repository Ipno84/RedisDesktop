import { LIST_REDUCER_NAME } from "../../../constants/StoreConstants";

export default function getChunkedTokensSelector(state) {
    return state[LIST_REDUCER_NAME].chunkedTokens;
}
