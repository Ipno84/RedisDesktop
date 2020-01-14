import {
    ADD_REDIS_CLIENT,
    CLOSE_MODAL,
    CONNECT_REDIS_CLIENT,
    DISCONNECT_REDIS_CLIENT,
    REMOVE_REDIS_ClIENT,
    RESET_FORM_DATA,
    SET_ACTIVE_CONNECTED_CLIENT_INDEX,
    SET_ACTIVE_REDIS_CLIENT_KEYS,
    SET_FORM_DATA_ERROR,
    SET_FORM_DATA_ITEM,
    SET_SELECTED_CLIENT_INDEX
} from "./../../constants/RedisClientsConstants";

import { REDIS_CLIENTS_REDUCER_NAME } from "../../constants/StoreConstants";
import { REMOVE_REDIS_CLIENT_MODAL_KEY } from "../../constants/ModalsConstants";
import { SUCCESS } from "./../../constants/BaseConstants";
import { createTransform } from "redux-persist";

export const initialState = {
    clients: [],
    connectedClients: [],
    activeConnectedClientIndex: -1,
    selectedClientIndex: -1,
    form: {
        name: "",
        host: "",
        port: "",
        password: ""
    },
    formKeyErrors: {},
    modals: []
};

export const RedisClientsReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState };
    },
    outboundState => {
        return {
            ...outboundState,
            connectedClients: initialState.connectedClients,
            activeConnectedClientIndex: initialState.activeConnectedClientIndex,
            selectedClientIndex: initialState.selectedClientIndex,
            form: initialState.form,
            formKeyErrors: initialState.formKeyErrors,
            modals: initialState.modals
        };
    },
    { whitelist: [REDIS_CLIENTS_REDUCER_NAME] }
);

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_REDIS_CLIENT + SUCCESS:
            return {
                ...state,
                clients: [...state.clients, action.client],
                form: initialState.form,
                formKeyErrors: initialState.formKeyErrors
            };
        case REMOVE_REDIS_ClIENT:
            return {
                ...state,
                modals: [...state.modals, REMOVE_REDIS_CLIENT_MODAL_KEY],
                formKeyErrors: initialState.formKeyErrors
            };
        case REMOVE_REDIS_ClIENT + SUCCESS:
            if (state.selectedClientIndex === -1) {
                return { ...state };
            }
            return {
                ...state,
                clients: [...state.clients.slice(0, state.selectedClientIndex), ...state.clients.slice(state.selectedClientIndex + 1)],
                formKeyErrors: initialState.formKeyErrors
            };
        case CONNECT_REDIS_CLIENT + SUCCESS:
            return {
                ...state,
                connectedClients: [...state.connectedClients, action.connectedClient],
                formKeyErrors: initialState.formKeyErrors,
                activeConnectedClientIndex: state.connectedClients.length
            };
        case DISCONNECT_REDIS_CLIENT + SUCCESS:
            return {
                ...state,
                connectedClients: [...state.connectedClients.slice(0, action.index), ...state.connectedClients.slice(action.index + 1)],
                formKeyErrors: initialState.formKeyErrors,
                activeConnectedClientIndex: state.connectedClients.length - 2
            };
        case SET_SELECTED_CLIENT_INDEX:
            return {
                ...state,
                selectedClientIndex: action.index,
                formKeyErrors: initialState.formKeyErrors
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
        case CLOSE_MODAL:
            return {
                ...state,
                modals: [...state.modals.slice(0, action.index), ...state.modals.slice(action.index + 1)],
                formKeyErrors: initialState.formKeyErrors
            };
        case SET_ACTIVE_CONNECTED_CLIENT_INDEX:
            return {
                ...state,
                activeConnectedClientIndex: action.index,
                formKeyErrors: initialState.formKeyErrors
            };
        case SET_ACTIVE_REDIS_CLIENT_KEYS:
            return {
                ...state,
                connectedClients: [
                    ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                    {
                        ...state.connectedClients[state.activeConnectedClientIndex],
                        keys: action.keys
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1)
                ]
            };
        default:
            return state;
    }
};
