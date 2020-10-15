import { Button, Dialog } from "react-desktop/macOs";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import closeGenericErrorModalAction from "./../../../../state/actions/closeGenericErrorModalAction";
import getModalErrorSelector from "../../../../state/selectors/getModalErrorSelector";

const GenericErrorAlert = ({ index }) => {
    const dispatch = useDispatch();
    const close = useCallback(() => dispatch(closeGenericErrorModalAction(index)), [dispatch, index]);
    const { title, message } = useSelector((state) => getModalErrorSelector(state));
    useEffect(() => {
        if (document.activeElement) {
            document.activeElement.blur();
        }
    });
    return (
        <Dialog
            title={title}
            message={message}
            buttons={[
                <Button color="blue" onClick={() => close()}>
                    Ok
                </Button>,
            ]}
        />
    );
};

export default GenericErrorAlert;
