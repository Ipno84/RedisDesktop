import React, { useCallback } from "react";

import Styled from "./styled";
import { TextInput } from "react-desktop/macOs";
import getActiveRedisClientKeysAction from "../../../../../../../state/actions/getActiveRedisClientKeysAction";
import { useDispatch } from "react-redux";

const Top = () => {
    const dispatch = useDispatch();
    const getActiveRedisClientKeys = useCallback(value => dispatch(getActiveRedisClientKeysAction(value)), [dispatch]);
    return (
        <Styled>
            <TextInput defaultValue="" placeholder="Key..." onEnter={e => getActiveRedisClientKeys(e.target.value)} />
        </Styled>
    );
};

export default Top;
