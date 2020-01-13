import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";
import Styled from "./styled";
import getSelectedClientIndexSelector from "./../../../../../state/selectors/getSelectedClientIndexSelector";
import removeRedisClientAction from "./../../../../../state/actions/removeRedisClientAction";

const BottomBar = () => {
    const dispatch = useDispatch();
    const getSelectedClientIndex = useSelector(state => getSelectedClientIndexSelector(state));
    const removeRedisClient = useCallback(() => getSelectedClientIndex !== -1 && dispatch(removeRedisClientAction()));
    return (
        <Styled>
            <Button>+</Button>
            <Button onClick={removeRedisClient}>-</Button>
        </Styled>
    );
};

export default BottomBar;
