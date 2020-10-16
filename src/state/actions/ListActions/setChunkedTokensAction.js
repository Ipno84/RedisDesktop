import { SET_CHUNKED_TOKENS } from "./../../../constants/ListConstants";

export default function setChunkedTokensAction(tokens) {
    return {
        type: SET_CHUNKED_TOKENS,
        tokens
    };
}
