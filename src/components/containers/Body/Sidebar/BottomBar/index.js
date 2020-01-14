import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";
import Styled from "./styled";
import getSelectedClientIndexSelector from "./../../../../../state/selectors/getSelectedClientIndexSelector";
import removeRedisClientAction from "./../../../../../state/actions/removeRedisClientAction";
import setActiveConnectedClientAction from "./../../../../../state/actions/setActiveConnectedClientAction";

const BottomBar = () => {
    const dispatch = useDispatch();
    const selectedClientIndex = useSelector(state => getSelectedClientIndexSelector(state));
    const removeRedisClient = useCallback(() => selectedClientIndex !== -1 && dispatch(removeRedisClientAction()), [dispatch, selectedClientIndex]);
    const setActiveConnectedClient = useCallback(index => dispatch(setActiveConnectedClientAction(index)), [dispatch]);
    return (
        <Styled>
            <Button onClick={() => setActiveConnectedClient(-1)}>+</Button>
            <Button onClick={removeRedisClient}>-</Button>
        </Styled>
    );
};

export default BottomBar;
