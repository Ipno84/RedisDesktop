import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Styled from "./styled";
import connectRedisClientAction from "./../../../../../../state/actions/connectRedisClientAction";
import isActiveConnectedClientByNameSelector from "./../../../../../../state/selectors/isActiveConnectedClientByNameSelector";
import isClientSelectedSelector from "./../../../../../../state/selectors/isClientSelectedSelector";
import setSelectedClientIndexAction from "./../../../../../../state/actions/setSelectedClientIndexAction";

const Item = ({ item, index }) => {
    const isClientSelected = useSelector(state => isClientSelectedSelector(state, index));
    const isActiveConnectedClientByName = useSelector(state => isActiveConnectedClientByNameSelector(state, item.name));
    const dispatch = useDispatch();
    const setSelectedClientIndex = useCallback(index => dispatch(setSelectedClientIndexAction(index)), [dispatch]);
    const connect = useCallback(() => dispatch(connectRedisClientAction(false)), [dispatch]);

    return (
        <Styled
            active={isActiveConnectedClientByName}
            onClick={() => setSelectedClientIndex(index)}
            onDoubleClick={() => connect()}
            selected={isClientSelected}
        >
            {item.name}
        </Styled>
    );
};

export default Item;
