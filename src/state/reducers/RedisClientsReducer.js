import {
    ADD_REDIS_CLIENT,
    ADD_SENTINEL,
    CLOSE_MODAL,
    CONNECT_REDIS_CLIENT,
    DISCONNECT_REDIS_CLIENT,
    EDIT_REDIS_CLIENT,
    REMOVE_REDIS_ClIENT,
    REMOVE_SENTINEL,
    RESET_FORM_DATA,
    SAVE_REDIS_CLIENT,
    SET_ACTIVE_CONNECTED_CLIENT_INDEX,
    SET_ACTIVE_REDIS_CLIENT_KEYS,
    SET_ACTIVE_REDIS_SEARCH_KEY,
    SET_CURRENT_EDITED_VALUE,
    SET_CURRENT_KEY,
    SET_CURRENT_VALUE,
    SET_FORM_DATA_ERROR,
    SET_FORM_DATA_ITEM,
    SET_PARSER_TYPE,
    SET_REDIS_SHELL,
    SET_REMOTE_VALUE,
    SET_SEARCH_KEYWORD,
    SET_SEARCH_RESULTS,
    SET_SEARCH_SELECTED_ITEM_INDEX,
    SET_SEARCH_VISIBILITY,
    SET_SELECTED_CLIENT_INDEX,
    TOGGLE_FULLSCREEN_TERMINAL
} from "./../../constants/RedisClientsConstants";
import { REMOVE_REDIS_CLIENT_MODAL_KEY, SET_REMOTE_VALUE_MODAL_KEY } from "../../constants/ModalsConstants";

import { REDIS_CLIENTS_REDUCER_NAME } from "../../constants/StoreConstants";
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
        master: "",
        password: "",
        sentinels: [
            {
                host: "",
                port: ""
            }
        ]
    },
    formKeyErrors: {},
    modals: [],
    isTerminalFullscreen: false,
    editingIndex: -1,
    search: {
        keyword: "",
        isActive: false,
        results: [],
        selectedItemIndex: -1
    }
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
            modals: initialState.modals,
            isTerminalFullscreen: initialState.isTerminalFullscreen,
            editingIndex: -1,
            search: initialState.search
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
                formKeyErrors: initialState.formKeyErrors,
                editingIndex: initialState.editingIndex
            };
        case REMOVE_REDIS_ClIENT:
            return {
                ...state,
                modals: [...state.modals, REMOVE_REDIS_CLIENT_MODAL_KEY],
                formKeyErrors: initialState.formKeyErrors,
                editingIndex: initialState.editingIndex
            };
        case REMOVE_REDIS_ClIENT + SUCCESS:
            if (state.selectedClientIndex === -1) {
                return { ...state, editingIndex: initialState.editingIndex };
            }
            return {
                ...state,
                clients: [...state.clients.slice(0, state.selectedClientIndex), ...state.clients.slice(state.selectedClientIndex + 1)],
                formKeyErrors: initialState.formKeyErrors,
                editingIndex: initialState.editingIndex
            };
        case CONNECT_REDIS_CLIENT + SUCCESS:
            return {
                ...state,
                connectedClients: [...state.connectedClients, action.connectedClient],
                formKeyErrors: initialState.formKeyErrors,
                activeConnectedClientIndex: state.connectedClients.length,
                editingIndex: initialState.editingIndex
            };
        case DISCONNECT_REDIS_CLIENT + SUCCESS:
            return {
                ...state,
                connectedClients: [...state.connectedClients.slice(0, action.index), ...state.connectedClients.slice(action.index + 1)],
                formKeyErrors: initialState.formKeyErrors,
                activeConnectedClientIndex: state.connectedClients.length - 2,
                editingIndex: initialState.editingIndex
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
                formKeyErrors: initialState.formKeyErrors,
                editingIndex: initialState.editingIndex
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
        case SET_ACTIVE_REDIS_SEARCH_KEY:
            return {
                ...state,
                connectedClients: [
                    ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                    {
                        ...state.connectedClients[state.activeConnectedClientIndex],
                        searchKey: action.searchKey
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1)
                ]
            };
        case SET_CURRENT_KEY:
            return {
                ...state,
                connectedClients: [
                    ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                    {
                        ...state.connectedClients[state.activeConnectedClientIndex],
                        selectedKey: action.selectedKey
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1)
                ]
            };
        case SET_CURRENT_VALUE:
            return {
                ...state,
                connectedClients: [
                    ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                    {
                        ...state.connectedClients[state.activeConnectedClientIndex],
                        value: action.value
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1)
                ]
            };
        case SET_CURRENT_EDITED_VALUE:
            if (action.editedValue === undefined) {
                const { editedValue: toRemove, ...redisClient } = state.connectedClients[state.activeConnectedClientIndex];
                return {
                    ...state,
                    connectedClients: [
                        ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                        {
                            ...redisClient
                        },
                        ...state.connectedClients.slice(state.activeConnectedClientIndex + 1)
                    ]
                };
            }
            return {
                ...state,
                connectedClients: [
                    ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                    {
                        ...state.connectedClients[state.activeConnectedClientIndex],
                        editedValue: action.editedValue
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1)
                ]
            };
        case SET_PARSER_TYPE:
            const { editedValue: toRemove, ...redisClient } = state.connectedClients[state.activeConnectedClientIndex];
            return {
                ...state,
                connectedClients: [
                    ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                    {
                        ...redisClient,
                        parser: action.parser
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1)
                ]
            };
        case SET_REDIS_SHELL + SUCCESS:
            const isReplace = Boolean(action.shell.response);
            const currentClient = state.connectedClients[state.activeConnectedClientIndex];
            const currentClientShells = currentClient.shells ? currentClient.shells : [];
            return {
                ...state,
                connectedClients: [
                    ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                    {
                        ...state.connectedClients[state.activeConnectedClientIndex],
                        shells: isReplace
                            ? [
                                  ...currentClientShells.slice(0, currentClientShells.length - 1),
                                  action.shell,
                                  ...currentClientShells.slice(currentClientShells.length)
                              ]
                            : [...currentClientShells, action.shell]
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1)
                ]
            };
        case TOGGLE_FULLSCREEN_TERMINAL:
            return { ...state, isTerminalFullscreen: !state.isTerminalFullscreen };
        case EDIT_REDIS_CLIENT:
            const { name, host, port, password } = action.index !== -1 ? state.clients[action.index] : {};
            return {
                ...state,
                editingIndex: action.index,
                form: {
                    name: name ? name : "",
                    host: host ? host : "",
                    port: port ? port : "",
                    password: password ? password : ""
                },
                activeConnectedClientIndex: initialState.activeConnectedClientIndex
            };
        case SAVE_REDIS_CLIENT:
            if (state.editingIndex === -1) {
                return { ...state };
            }
            const clientData = state.clients[state.editingIndex];
            return {
                ...state,
                editingIndex: initialState.editingIndex,
                form: initialState.form,
                formKeyErrors: initialState.formKeyErrors,
                clients: [
                    ...state.clients.slice(0, state.editingIndex),
                    {
                        ...clientData,
                        ...state.form
                    },
                    ...state.clients.slice(state.editingIndex + 1)
                ]
            };
        case SET_SEARCH_KEYWORD:
            return {
                ...state,
                search: {
                    ...state.search,
                    keyword: action.keyword
                }
            };
        case SET_SEARCH_VISIBILITY:
            return {
                ...state,
                search: {
                    ...state.search,
                    isActive: action.isActive
                }
            };
        case SET_SEARCH_RESULTS:
            return {
                ...state,
                search: {
                    ...state.search,
                    results: action.results
                }
            };
        case SET_SEARCH_SELECTED_ITEM_INDEX:
            return {
                ...state,
                search: {
                    ...state.search,
                    selectedItemIndex: action.selectedItemIndex
                }
            };
        case SET_REMOTE_VALUE:
            return {
                ...state,
                modals: [...state.modals, SET_REMOTE_VALUE_MODAL_KEY]
            };
        case ADD_SENTINEL:
            return {
                ...state,
                formKeyErrors: initialState.formKeyErrors,
                form: {
                    ...state.form,
                    sentinels: [...state.form.sentinels, { ...initialState.form.sentinels[0] }]
                }
            };
        case REMOVE_SENTINEL:
            return {
                ...state,
                form: {
                    ...state.form,
                    sentinels: [...state.form.sentinels.slice(0, action.index), ...state.form.sentinels.slice(action.index + 1)]
                }
            };
        default:
            return state;
    }
};
