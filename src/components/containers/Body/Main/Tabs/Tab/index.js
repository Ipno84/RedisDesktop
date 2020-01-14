import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Styled from "./styled";
import disconnectRedisClientAction from "../../../../../../state/actions/disconnectRedisClientAction";
import isActiveConnectedClientSelector from "../../../../../../state/selectors/isActiveConnectedClientSelector";

const Tab = ({ children, index, onClick }) => {
    const dispatch = useDispatch();
    const disconnect = useCallback(() => dispatch(disconnectRedisClientAction(index)), [dispatch, index]);
    const isActiveConnectedClient = useSelector(state => isActiveConnectedClientSelector(state, index));
    return (
        <Styled
            active={isActiveConnectedClient}
            onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                onClick && onClick();
            }}
        >
            {children}
            <button
                onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    disconnect();
                }}
            >
                ×
            </button>
        </Styled>
    );
};

export default Tab;
