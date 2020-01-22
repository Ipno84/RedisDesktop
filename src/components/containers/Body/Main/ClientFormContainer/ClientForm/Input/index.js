import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Error from "./Error";
import Styled from "./styled";
import { TextInput } from "react-desktop/macOs";
import getFormDataItemSelector from "../../../../../../../state/selectors/getFormDataItemSelector";
import setFormDataItemAction from "../../../../../../../state/actions/setFormDataItemAction";

const Input = ({ inputKey, password, index }) => {
    const value = useSelector(state => getFormDataItemSelector(state, inputKey, index));
    const dispatch = useDispatch();
    const setFormDataItem = useCallback(value => dispatch(setFormDataItemAction(inputKey, value, index)), [dispatch, inputKey, index]);
    return (
        <>
            <TextInput password={password ? true : false} value={value} onChange={e => setFormDataItem(e.target.value)} />
            <Styled>
                <Error inputKey={inputKey} index={index} />
            </Styled>
        </>
    );
};

export default memo(Input);
