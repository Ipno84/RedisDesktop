import React, { memo } from "react";

import { Label } from "react-desktop/macOs";
import getFormDataErrorSelector from "../../../../../../../state/selectors/getFormDataErrorSelector";
import { useSelector } from "react-redux";

const InputLabel = ({ inputKey, children }) => {
    const isError = useSelector(state => getFormDataErrorSelector(state, inputKey));
    return <Label color={isError ? "red" : "black"}>{children}</Label>;
};

export default memo(InputLabel);
