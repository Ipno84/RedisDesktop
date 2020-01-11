import { ADD_REDIS_CLIENT, CONNECT_REDIS, DISCONNECT_REDIS, REMOVE_REDIS_ClIENT, SET_SELECTED_CLIENT_INDEX } from "./../../constants/RedisClientsConstants";

import { SUCCESS } from "./../../constants/BaseConstants";

const initialState = {
    clients: [
        {
            name: "Test"
        }
    ],
    connectedClient: null,
    selectedClientIndex: -1
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
        case SET_SELECTED_CLIENT_INDEX:
            return {
                ...state,
                selectedClientIndex: action.index !== state.selectedClientIndex ? action.index : initialState.selectedClientIndex
            };
        default:
            return state;
    }
};
