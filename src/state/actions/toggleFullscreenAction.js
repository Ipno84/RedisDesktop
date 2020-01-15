import { TOGGLE_FULLSCREEN_TERMINAL } from "./../../constants/RedisClientsConstants";

export default function toggleFullscreenAction() {
    return {
        type: TOGGLE_FULLSCREEN_TERMINAL
    };
}
