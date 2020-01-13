import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Error from "./Error";
import Styled from "./styled";
import { TextInput } from "react-desktop/macOs";
import getFormDataItemSelector from "../../../../../../../state/selectors/getFormDataItemSelector";
import setFormDataItemAction from "../../../../../../../state/actions/setFormDataItemAction";

const Input = ({ inputKey, password }) => {
    const value = useSelector(state => getFormDataItemSelector(state, inputKey));
    const dispatch = useDispatch();
    const setFormDataItem = useCallback(value => dispatch(setFormDataItemAction(inputKey, value)), [dispatch, inputKey]);
    return (
        <>
            <TextInput password={password ? true : false} value={value} onChange={e => setFormDataItem(e.target.value)} />
            <Styled>
                <Error inputKey={inputKey} />
            </Styled>
        </>
    );
};

export default memo(Input);
