import {
    ADD_REDIS_CLIENT,
    CONNECT_REDIS_CLIENT,
    DISCONNECT_REDIS_CLIENT,
    REMOVE_REDIS_ClIENT,
    RESET_FORM_DATA,
    SET_FORM_DATA_ERROR,
    SET_FORM_DATA_ITEM,
    SET_SELECTED_CLIENT_INDEX
} from "./../../constants/RedisClientsConstants";

import { SUCCESS } from "./../../constants/BaseConstants";

const initialState = {
    clients: [],
    connectedClients: [],
    selectedClientIndex: -1,
    form: {
        name: "",
        host: "",
        port: "",
        password: ""
    },
    formKeyErrors: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_REDIS_CLIENT + SUCCESS:
            return {
                ...state,
                clients: [...state.clients, action.client]
            };
        case REMOVE_REDIS_ClIENT + SUCCESS:
            return {
                ...state,
                clients: [...state.clients.slice(0, action.index), ...state.clients.slice(action.index + 1)]
            };
        case CONNECT_REDIS_CLIENT + SUCCESS:
            return {
                ...state,
                connectedClients: [...state.connectedClients, action.connectedClient]
            };
        case DISCONNECT_REDIS_CLIENT:
            return {
                ...state,
                connectedClients: [...state.connectedClients.slice(0, action.index), ...state.connectedClients.slice(action.index + 1)]
            };
        case SET_SELECTED_CLIENT_INDEX:
            return {
                ...state,
                selectedClientIndex: action.index
            };
        case SET_FORM_DATA_ITEM:
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.key]: action.value
                },
                formKeyErrors: initialState.formKeyErrors
            };
        case RESET_FORM_DATA:
            return {
                ...state,
                form: initialState.form,
                formKeyErrors: initialState.formKeyErrors
            };
        case SET_FORM_DATA_ERROR:
            return {
                ...state,
                formKeyErrors: action.formKeyErrors
            };
        default:
            return state;
    }
};
