import React, { memo } from "react";

import { Text } from "react-desktop/macOs";
import getFormDataErrorMessagesSelector from "../../../../../../../../state/selectors/getFormDataErrorMessagesSelector";
import { useSelector } from "react-redux";

const Error = ({ inputKey }) => {
    const errors = useSelector(state => getFormDataErrorMessagesSelector(state, inputKey));
    if (!errors) return null;
    return errors.map(error => (
        <Text key={error} color="red">
            {error}
        </Text>
    ));
};

export default memo(Error);
