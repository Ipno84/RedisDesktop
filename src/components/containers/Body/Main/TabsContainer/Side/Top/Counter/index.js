import React, { memo } from "react";

import Styled from "./styled";
import getActiveConnectedClientKeysCountSelector from "./../../../../../../../../state/selectors/getActiveConnectedClientKeysCountSelector";
import { useSelector } from "react-redux";

const Counter = () => {
    const count = useSelector(state => getActiveConnectedClientKeysCountSelector(state));
    if (!count) return null;
    return <Styled>{count}</Styled>;
};

export default memo(Counter);
