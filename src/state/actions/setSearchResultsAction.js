import { SET_SEARCH_RESULTS } from "./../../constants/RedisClientsConstants";

export default function setSearchResultsAction(results) {
    return {
        type: SET_SEARCH_RESULTS,
        results
    };
}
