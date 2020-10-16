import { SET_SEARCH_KEYWORD } from "./../../constants/RedisClientsConstants";

export default function setSearchKeywordAction(keyword) {
    return {
        type: SET_SEARCH_KEYWORD,
        keyword
    };
}
