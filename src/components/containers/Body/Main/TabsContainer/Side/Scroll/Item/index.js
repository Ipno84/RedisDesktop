import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Styled from "./styled";
import isCurrentKeyActiveSelector from "./../../../../../../../../state/selectors/isCurrentKeyActiveSelector";
import setActiveRedisSelectedKeyAction from "./../../../../../../../../state/actions/setActiveRedisSelectedKeyAction";

const Item = ({ children }) => {
    const dispatch = useDispatch();
    const isCurrentKeyActive = useSelector(state => isCurrentKeyActiveSelector(state, children));
    const setActiveRedisSelectedKey = useCallback(() => dispatch(setActiveRedisSelectedKeyAction(children)), [dispatch]);
    return (
        <Styled isActive={isCurrentKeyActive} onClick={() => setActiveRedisSelectedKey()}>
            {children}
        </Styled>
    );
};

export default Item;
