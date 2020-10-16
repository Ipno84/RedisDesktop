import { ADD_SENTINEL } from "./../../constants/RedisClientsConstants";

export default function addSentinelAction() {
    return {
        type: ADD_SENTINEL
    };
}
