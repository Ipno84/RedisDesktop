import { Button, Dialog } from "react-desktop/macOs";
import React, { useCallback, useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";

import closeModalAction from "./../../../../state/actions/closeModalAction";
import deleteRemoteKeyCancelAction from "./../../../../state/actions/deleteRemoteKeyCancelAction";
import deleteRemoteKeyConfirmAction from "./../../../../state/actions/deleteRemoteKeyConfirmAction";
import getDeletingKeySelector from "./../../../../state/selectors/getDeletingKeySelector";

const ConfirmDeleteRemoteKeyModal = ({ index }) => {
    const dispatch = useDispatch();
    const deletingKey = useSelector(state => getDeletingKeySelector(state));
    const cancel = useCallback(
        () =>
            batch(() => {
                dispatch(closeModalAction(index));
                dispatch(deleteRemoteKeyCancelAction());
            }),
        [dispatch, index]
    );
    const confirm = useCallback(
        () =>
            batch(() => {
                dispatch(closeModalAction(index));
                dispatch(deleteRemoteKeyConfirmAction());
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
            title="Conferma cancellazione"
            message={`Sei sicuro di voler cancellare la chiave ${deletingKey}?`}
            buttons={[
                <Button onClick={() => cancel()}>Annulla</Button>,
                <Button color="blue" onClick={() => confirm()}>
                    Conferma
                </Button>
            ]}
        />
    );
};

export default ConfirmDeleteRemoteKeyModal;
