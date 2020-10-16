import { REMOVE_SENTINEL } from "./../../constants/RedisClientsConstants";

export default function removeSentinelAction(index) {
    return {
        type: REMOVE_SENTINEL,
        index
    };
}
