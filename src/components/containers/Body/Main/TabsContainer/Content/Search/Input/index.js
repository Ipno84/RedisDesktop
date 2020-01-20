import React, { useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TextInput } from "react-desktop/macOs";
import getSearchKeywordSelector from "./../../../../../../../../state/selectors/getSearchKeywordSelector";
import setSearchKeywordAction from "./../../../../../../../../state/actions/setSearchKeywordAction";

const Input = () => {
    const dispatch = useDispatch();
    const searchKeyword = useSelector(state => getSearchKeywordSelector(state));
    const setSearchKeyword = useCallback(keyword => dispatch(setSearchKeywordAction(keyword)), [dispatch]);

    const onChange = e => setSearchKeyword(e.target.value);

    return <TextInput width={300} rounded={true} placeholder="Cerca..." type="search" value={searchKeyword} onChange={onChange} />;
};

export default memo(Input);
