import {
    ADD_REDIS_CLIENT,
    ADD_SENTINEL,
    CLOSE_GENERIC_ERROR_MODAL,
    CLOSE_MODAL,
    CONNECT_REDIS_CLIENT,
    DELETE_REMOTE_KEY,
    DELETE_REMOTE_KEYS,
    DISCONNECT_REDIS_CLIENT,
    EDIT_REDIS_CLIENT,
    OPEN_GENERIC_ERROR_MODAL,
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
    TOGGLE_FULLSCREEN_TERMINAL,
    TOGGLE_MULTI_SELECTED_KEY,
    TOGGLE_SELECTED_KEY,
} from "./../../constants/RedisClientsConstants";
import { CANCEL, CONFIRM, SUCCESS } from "./../../constants/BaseConstants";
import {
    DELETE_REMOTE_KEY_MODAL_KEY,
    DELETE_REMOTE_KEY_MODAL_KEYS,
    GENERIC_ERROR_MODAL_KEY,
    REMOVE_REDIS_CLIENT_MODAL_KEY,
    SET_REMOTE_VALUE_MODAL_KEY,
} from "../../constants/ModalsConstants";

import { REDIS_CLIENTS_REDUCER_NAME } from "../../constants/StoreConstants";
import { createTransform } from "redux-persist";

export const initialState = {
    clients: [],
    connectedClients: [],
    activeConnectedClientIndex: -1,
    selectedClientIndex: -1,
    form: {
        name: "",
        master: "",
        password: "",
        sentinels: [
            {
                host: "",
                port: "",
            },
        ],
    },
    formKeyErrors: {},
    modals: [],
    modalError: {
        title: "",
        message: "",
    },
    isTerminalFullscreen: false,
    editingIndex: -1,
    search: {
        keyword: "",
        isActive: false,
        results: [],
        selectedItemIndex: -1,
    },
    deletingKey: "",
    deletingKeys: [],
};

export const RedisClientsReducerTransform = createTransform(
    (inboundState) => {
        return { ...inboundState };
    },
    (outboundState) => {
        return {
            ...outboundState,
            connectedClients: initialState.connectedClients,
            activeConnectedClientIndex: initialState.activeConnectedClientIndex,
            selectedClientIndex: initialState.selectedClientIndex,
            form: initialState.form,
            formKeyErrors: initialState.formKeyErrors,
            modals: initialState.modals,
            modalError: initialState.modalError,
            isTerminalFullscreen: initialState.isTerminalFullscreen,
            editingIndex: -1,
            search: initialState.search,
            deletingKey: initialState.deletingKey,
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
                editingIndex: initialState.editingIndex,
            };
        case REMOVE_REDIS_ClIENT:
            return {
                ...state,
                modals: [...state.modals, REMOVE_REDIS_CLIENT_MODAL_KEY],
                formKeyErrors: initialState.formKeyErrors,
                editingIndex: initialState.editingIndex,
            };
        case REMOVE_REDIS_ClIENT + SUCCESS:
            if (state.selectedClientIndex === -1) {
                return { ...state, editingIndex: initialState.editingIndex };
            }
            return {
                ...state,
                clients: [...state.clients.slice(0, state.selectedClientIndex), ...state.clients.slice(state.selectedClientIndex + 1)],
                formKeyErrors: initialState.formKeyErrors,
                editingIndex: initialState.editingIndex,
            };
        case CONNECT_REDIS_CLIENT + SUCCESS:
            return {
                ...state,
                connectedClients: [...state.connectedClients, action.connectedClient],
                formKeyErrors: initialState.formKeyErrors,
                activeConnectedClientIndex: state.connectedClients.length,
                editingIndex: initialState.editingIndex,
            };
        case DISCONNECT_REDIS_CLIENT + SUCCESS:
            return {
                ...state,
                connectedClients: [...state.connectedClients.slice(0, action.index), ...state.connectedClients.slice(action.index + 1)],
                formKeyErrors: initialState.formKeyErrors,
                activeConnectedClientIndex: state.connectedClients.length - 2,
                editingIndex: initialState.editingIndex,
            };
        case SET_SELECTED_CLIENT_INDEX:
            return {
                ...state,
                selectedClientIndex: action.index,
                formKeyErrors: initialState.formKeyErrors,
            };
        case SET_FORM_DATA_ITEM:
            if (action.index === undefined) {
                return {
                    ...state,
                    form: {
                        ...state.form,
                        [action.key]: action.value,
                    },
                    formKeyErrors: initialState.formKeyErrors,
                };
            }
            return {
                ...state,
                form: {
                    ...state.form,
                    sentinels: [
                        ...state.form.sentinels.slice(0, action.index),
                        {
                            ...state.form.sentinels[action.index],
                            [action.key]: action.value,
                        },
                        ...state.form.sentinels.slice(action.index + 1),
                    ],
                },
                formKeyErrors: initialState.formKeyErrors,
            };
        case RESET_FORM_DATA:
            return {
                ...state,
                form: initialState.form,
                formKeyErrors: initialState.formKeyErrors,
                editingIndex: initialState.editingIndex,
            };
        case SET_FORM_DATA_ERROR:
            return {
                ...state,
                formKeyErrors: action.formKeyErrors,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modals: [...state.modals.slice(0, action.index), ...state.modals.slice(action.index + 1)],
                formKeyErrors: initialState.formKeyErrors,
            };
        case SET_ACTIVE_CONNECTED_CLIENT_INDEX:
            return {
                ...state,
                activeConnectedClientIndex: action.index,
                formKeyErrors: initialState.formKeyErrors,
            };
        case SET_ACTIVE_REDIS_CLIENT_KEYS:
            return {
                ...state,
                connectedClients: [
                    ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                    {
                        ...state.connectedClients[state.activeConnectedClientIndex],
                        keys: action.keys,
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1),
                ],
            };
        case SET_ACTIVE_REDIS_SEARCH_KEY:
            return {
                ...state,
                connectedClients: [
                    ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                    {
                        ...state.connectedClients[state.activeConnectedClientIndex],
                        searchKey: action.searchKey,
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1),
                ],
            };
        case SET_CURRENT_KEY:
            return {
                ...state,
                connectedClients: [
                    ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                    {
                        ...state.connectedClients[state.activeConnectedClientIndex],
                        selectedKey: action.selectedKey,
                        selectedKeys: [action.selectedKey].filter((e) => e).filter((value, index, self) => self.indexOf(value) === index),
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1),
                ],
            };
        case TOGGLE_SELECTED_KEY + SUCCESS:
            return {
                ...state,
                connectedClients: [
                    ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                    {
                        ...state.connectedClients[state.activeConnectedClientIndex],
                        selectedKey: action.selectedKey,
                        selectedKeys: action.selectedKeys.filter((e) => e).filter((value, index, self) => self.indexOf(value) === index),
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1),
                ],
            };
        case TOGGLE_MULTI_SELECTED_KEY + SUCCESS: {
            return {
                ...state,
                connectedClients: [
                    ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                    {
                        ...state.connectedClients[state.activeConnectedClientIndex],
                        selectedKeys: [...state.connectedClients[state.activeConnectedClientIndex].selectedKeys, ...action.addedSelectedKeys]
                            .filter((e) => e)
                            .filter((value, index, self) => self.indexOf(value) === index),
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1),
                ],
            };
        }
        case SET_CURRENT_VALUE:
            return {
                ...state,
                connectedClients: [
                    ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                    {
                        ...state.connectedClients[state.activeConnectedClientIndex],
                        value: action.value,
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1),
                ],
            };
        case SET_CURRENT_EDITED_VALUE:
            if (action.editedValue === undefined) {
                const { editedValue: toRemove, ...redisClient } = state.connectedClients[state.activeConnectedClientIndex];
                return {
                    ...state,
                    connectedClients: [
                        ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                        {
                            ...redisClient,
                        },
                        ...state.connectedClients.slice(state.activeConnectedClientIndex + 1),
                    ],
                };
            }
            return {
                ...state,
                connectedClients: [
                    ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                    {
                        ...state.connectedClients[state.activeConnectedClientIndex],
                        editedValue: action.editedValue,
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1),
                ],
            };
        case SET_PARSER_TYPE:
            const { editedValue: toRemove, ...redisClient } = state.connectedClients[state.activeConnectedClientIndex];
            return {
                ...state,
                connectedClients: [
                    ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                    {
                        ...redisClient,
                        parser: action.parser,
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1),
                ],
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
                                  ...currentClientShells.slice(currentClientShells.length),
                              ]
                            : [...currentClientShells, action.shell],
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1),
                ],
            };
        case TOGGLE_FULLSCREEN_TERMINAL:
            return { ...state, isTerminalFullscreen: !state.isTerminalFullscreen };
        case EDIT_REDIS_CLIENT:
            return {
                ...state,
                editingIndex: action.index,
                form: action.index !== -1 ? state.clients[action.index] : initialState.form,
                formKeyErrors: initialState.formKeyErrors,
                activeConnectedClientIndex: initialState.activeConnectedClientIndex,
            };
        case SAVE_REDIS_CLIENT + SUCCESS:
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
                        ...state.form,
                    },
                    ...state.clients.slice(state.editingIndex + 1),
                ],
            };
        case SET_SEARCH_KEYWORD:
            return {
                ...state,
                search: {
                    ...state.search,
                    keyword: action.keyword,
                },
            };
        case SET_SEARCH_VISIBILITY:
            return {
                ...state,
                search: {
                    ...state.search,
                    isActive: action.isActive,
                },
            };
        case SET_SEARCH_RESULTS:
            return {
                ...state,
                search: {
                    ...state.search,
                    results: action.results,
                },
            };
        case SET_SEARCH_SELECTED_ITEM_INDEX:
            return {
                ...state,
                search: {
                    ...state.search,
                    selectedItemIndex: action.selectedItemIndex,
                },
            };
        case SET_REMOTE_VALUE:
            return {
                ...state,
                modals: [...state.modals, SET_REMOTE_VALUE_MODAL_KEY],
            };
        case ADD_SENTINEL:
            return {
                ...state,
                form: {
                    ...state.form,
                    sentinels: [...state.form.sentinels, { ...initialState.form.sentinels[0] }],
                },
                formKeyErrors: initialState.formKeyErrors,
            };
        case REMOVE_SENTINEL:
            return {
                ...state,
                form: {
                    ...state.form,
                    sentinels: [...state.form.sentinels.slice(0, action.index), ...state.form.sentinels.slice(action.index + 1)],
                },
                formKeyErrors: initialState.formKeyErrors,
            };
        case DELETE_REMOTE_KEY:
            return {
                ...state,
                deletingKey: action.key,
                modals: [...state.modals, DELETE_REMOTE_KEY_MODAL_KEY],
            };
        case DELETE_REMOTE_KEYS:
            return {
                ...state,
                deletingKeys: action.keys,
                modals: [...state.modals, DELETE_REMOTE_KEY_MODAL_KEYS],
            };
        case DELETE_REMOTE_KEY + CANCEL:
            return {
                ...state,
                deletingKey: initialState.deletingKey,
            };
        case DELETE_REMOTE_KEYS + CANCEL:
            return {
                ...state,
                deletingKeys: initialState.deletingKeys,
            };
        case DELETE_REMOTE_KEY + SUCCESS:
            const drC = state.connectedClients[state.activeConnectedClientIndex];
            return {
                ...state,
                deletingKey: initialState.deletingKey,
                selectedKeys: drC.selectedKeys.filter((e) => e !== state.deletingKey),
                selectedKey: drC.selectedKey === state.deletingKey ? "" : drC.selectedKey,
                value: drC.selectedKey === state.deletingKey ? "" : drC.value,
            };
        case DELETE_REMOTE_KEYS + SUCCESS:
            const drCs = state.connectedClients[state.activeConnectedClientIndex];
            return {
                ...state,
                deletingKeys: initialState.deletingKeys,
                selectedKeys: drCs.selectedKeys.filter((e) => state.deletingKeys.indexOf(e) === -1),
                selectedKey: drCs.selectedKeys.join("_") === state.deletingKeys.join("_") ? "" : drCs.selectedKey,
                value: drCs.selectedKeys.join("_") === state.deletingKeys.join("_") ? "" : drCs.value,
            };
        case DELETE_REMOTE_KEY + CONFIRM:
            const client = state.connectedClients[state.activeConnectedClientIndex];
            const keyIndex = client.keys.indexOf(state.deletingKey);
            return {
                ...state,
                connectedClients: [
                    ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                    {
                        ...client,
                        keys: [...client.keys.slice(0, keyIndex), ...client.keys.slice(keyIndex + 1)],
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1),
                ],
            };
        case DELETE_REMOTE_KEYS + CONFIRM:
            return {
                ...state,
                connectedClients: [
                    ...state.connectedClients.slice(0, state.activeConnectedClientIndex),
                    {
                        ...state.connectedClients[state.activeConnectedClientIndex],
                        keys: state.connectedClients[state.activeConnectedClientIndex].keys.filter((e) => state.deletingKeys.indexOf(e) === -1),
                    },
                    ...state.connectedClients.slice(state.activeConnectedClientIndex + 1),
                ],
            };
        case OPEN_GENERIC_ERROR_MODAL:
            return {
                ...state,
                modals: [...state.modals, GENERIC_ERROR_MODAL_KEY],
                modalError: {
                    ...state.modalError,
                    title: action.title,
                    message: action.message,
                },
            };

        case CLOSE_GENERIC_ERROR_MODAL:
            const index = state.modals.indexOf(GENERIC_ERROR_MODAL_KEY);
            return {
                ...state,
                modals: [...state.modals.slice(0, index), ...state.modals.slice(index + 1)],
                modalError: initialState.modalError,
            };
        default:
            return state;
    }
};
