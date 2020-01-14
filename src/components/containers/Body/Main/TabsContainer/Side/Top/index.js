import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Counter from "./Counter";
import Styled from "./styled";
import { TextInput } from "react-desktop/macOs";
import getActiveConnectedClientSearchKeySelector from "../../../../../../../state/selectors/getActiveConnectedClientSearchKeySelector";
import getActiveRedisClientKeysAction from "../../../../../../../state/actions/getActiveRedisClientKeysAction";
import setActiveRedisSearchKeyAction from "../../../../../../../state/actions/setActiveRedisSearchKeyAction";

const Top = () => {
    const dispatch = useDispatch();
    const getActiveRedisClientKeys = useCallback(value => dispatch(getActiveRedisClientKeysAction(value)), [dispatch]);
    const setActiveRedisSearchKey = useCallback(value => dispatch(setActiveRedisSearchKeyAction(value)), [dispatch]);
    const value = useSelector(state => getActiveConnectedClientSearchKeySelector(state));
    return (
        <Styled>
            <TextInput
                value={value}
                placeholder="Cerca..."
                onChange={e => setActiveRedisSearchKey(e.target.value)}
                onEnter={e => getActiveRedisClientKeys(e.target.value)}
            />
            <Counter />
        </Styled>
    );
};

export default Top;
