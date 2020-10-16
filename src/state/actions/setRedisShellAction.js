import { SET_REDIS_SHELL } from "./../../constants/RedisClientsConstants";

export default function setRedisShellAction({ command, response }) {
    return {
        type: SET_REDIS_SHELL,
        command,
        response
    };
}
