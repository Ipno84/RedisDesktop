import { ADD_REDIS_CLIENT, CONNECT_REDIS, DISCONNECT_REDIS, REMOVE_REDIS_ClIENT } from "./../../constants/RedisClientsConstants";

import { SUCCESS } from "./../../constants/BaseConstants";

const initialState = {
    clients: [],
    connectedClient: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_REDIS_CLIENT:
            return {
                ...state,
                clients: [...state.clients, action.client]
            };
        case REMOVE_REDIS_ClIENT:
            return {
                ...state,
                clients: [...state.clients.slice(0, action.index), ...state.clients.slice(action.index + 1)]
            };
        case CONNECT_REDIS + SUCCESS:
            return {
                ...state,
                connectedClient: action.connectedClient
            };
        case DISCONNECT_REDIS:
            return {
                ...state,
                connectedClient: null
            };
        default:
            return state;
    }
};
