import React, { memo } from "react";

import { Label } from "react-desktop/macOs";
import getFormDataErrorSelector from "../../../../../../../state/selectors/getFormDataErrorSelector";
import { useSelector } from "react-redux";

const InputLabel = ({ inputKey, children, required, index }) => {
    const isError = useSelector(state => getFormDataErrorSelector(state, inputKey, index));
    return (
        <Label color={isError ? "red" : "black"}>
            {children}
            {required && "*"}
        </Label>
    );
};

export default memo(InputLabel);
