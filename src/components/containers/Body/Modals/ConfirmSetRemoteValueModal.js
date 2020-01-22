import { Button, Dialog } from "react-desktop/macOs";
import React, { useCallback, useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";

import closeModalAction from "./../../../../state/actions/closeModalAction";
import getActiveConnectedClientSelectedKeySelector from "./../../../../state/selectors/getActiveConnectedClientSelectedKeySelector";
import setRemoteValueSuccessAction from "./../../../../state/actions/setRemoteValueSuccessAction";

const ConfirmSetRemoteValueModal = ({ index }) => {
    const dispatch = useDispatch();
    const cancel = useCallback(() => dispatch(closeModalAction(index)), [dispatch, index]);
    const selectedKey = useSelector(state => getActiveConnectedClientSelectedKeySelector(state));
    const confirm = useCallback(
        () =>
            batch(() => {
                dispatch(setRemoteValueSuccessAction());
                dispatch(closeModalAction(index));
            }),
        [dispatch, index]
    );
    useEffect(() => {
        if (document.activeElement) {
            document.activeElement.blur();
        }
    });
    return (
        <Dialog
            title="Conferma modifica"
            message={`Sei sicuro di voler modificare la chiave ${selectedKey}?`}
            buttons={[
                <Button onClick={() => cancel()}>Annulla</Button>,
                <Button color="blue" onClick={() => confirm()}>
                    Conferma
                </Button>
            ]}
        />
    );
};

export default ConfirmSetRemoteValueModal;
