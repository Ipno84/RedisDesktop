import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Styled from "./styled";
import isClientSelectedSelector from "./../../../../../../state/selectors/isClientSelectedSelector";
import setSelectedClientIndexAction from "./../../../../../../state/actions/setSelectedClientIndexAction";

const Item = ({ item, index }) => {
    const isClientSelected = useSelector(state => isClientSelectedSelector(state, index));
    const dispatch = useDispatch();
    const setSelectedClientIndex = useCallback(index => dispatch(setSelectedClientIndexAction(index)), [dispatch]);

    return (
        <Styled onClick={() => setSelectedClientIndex(index)} onDoubleClick={() => console.log("connect")} selected={isClientSelected}>
            {item.name}
        </Styled>
    );
};

export default Item;
