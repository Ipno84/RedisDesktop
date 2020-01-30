import { SET_ACTIVE_CONNECTED_CLIENT_INDEX, SET_CURRENT_KEY, SET_CURRENT_VALUE, SET_PARSER_TYPE } from "./../../constants/RedisClientsConstants";
import { SET_CHUNKED_TOKENS, SET_DOM_ELEMENTS, SET_HTML, SET_INDEXES, SET_LIMIT_INDEXES, SET_OBSERVER } from "./../../constants/ListConstants";

import { LIST_REDUCER_NAME } from "../../constants/StoreConstants";
import { SUCCESS } from "../../constants/BaseConstants";
import { createTransform } from "redux-persist";

export const initialState = {
    chunkedTokens: [],
    html: "",
    observer: null,
    indexes: [],
    domElements: [],
    min: -1,
    max: -1
};

export const ListReducerTransform = createTransform(
    inboundState => {
        return { ...inboundState, domElements: initialState.domElements };
    },
    outboundState => {
        return {
            ...outboundState,
            chunkedTokens: initialState.chunkedTokens,
            html: initialState.html,
            observer: initialState.observer,
            indexes: initialState.indexes,
            domElements: initialState.domElements,
            min: initialState.min,
            max: initialState.max
        };
    },
    { blacklist: [LIST_REDUCER_NAME] }
);

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_VALUE:
        case SET_CURRENT_KEY:
        case SET_PARSER_TYPE:
        case SET_ACTIVE_CONNECTED_CLIENT_INDEX:
            return {
                ...state,
                chunkedTokens: initialState.chunkedTokens,
                html: initialState.html,
                indexes: initialState.indexes,
                domElements: initialState.domElements,
                min: initialState.min,
                max: initialState.max
            };
        case SET_LIMIT_INDEXES:
            return {
                ...state,
                min: action.min,
                max: action.max
            };
        case SET_DOM_ELEMENTS:
            return {
                ...state,
                domElements: action.domElements,
                indexes: Object.keys(action.domElements).fill(false)
            };
        case SET_INDEXES + SUCCESS:
            return {
                ...state,
                indexes: action.indexes
            };
        case SET_OBSERVER:
            return {
                ...state,
                observer: action.observer
            };
        case SET_CHUNKED_TOKENS:
            return {
                ...state,
                chunkedTokens: action.tokens.reduce((accumulator, currentValue) => {
                    if (accumulator.length) {
                        const lastChunkIndex = accumulator.length - 1;
                        const accumulatorLastChunk = accumulator[lastChunkIndex];
                        if (accumulatorLastChunk.length) {
                            const lastElementIndex = accumulatorLastChunk.length - 1;
                            const lastChunkElement = accumulatorLastChunk[lastElementIndex];
                            const currentValueContainsNewLine = /\r|\n/.exec(lastChunkElement);
                            if (currentValueContainsNewLine) return [...accumulator, [currentValue]];
                            return [...accumulator.slice(0, lastChunkIndex), [...accumulatorLastChunk, currentValue]];
                        } else {
                            return [...accumulator.slice(0, lastChunkIndex), [currentValue]];
                        }
                    } else return [...accumulator, [currentValue]];
                }, [])
            };
        case SET_HTML:
            return { ...state, html: action.html };
        default:
            return state;
    }
};
