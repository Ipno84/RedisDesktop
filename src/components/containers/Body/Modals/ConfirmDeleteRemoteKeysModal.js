import { Button, Dialog } from "react-desktop/macOs";
import React, { useCallback, useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";

import closeModalAction from "./../../../../state/actions/closeModalAction";
import deleteRemoteKeysCancelAction from "./../../../../state/actions/deleteRemoteKeysCancelAction";
import deleteRemoteKeysConfirmAction from "./../../../../state/actions/deleteRemoteKeysConfirmAction";
import getDeletingKeysSelector from "./../../../../state/selectors/getDeletingKeysSelector";

const ConfirmDeleteRemoteKeysModal = ({ index }) => {
    const dispatch = useDispatch();
    const deletingKeys = useSelector((state) => getDeletingKeysSelector(state));
    const cancel = useCallback(
        () =>
            batch(() => {
                dispatch(closeModalAction(index));
                dispatch(deleteRemoteKeysCancelAction());
            }),
        [dispatch, index]
    );
    const confirm = useCallback(
        () =>
            batch(() => {
                dispatch(closeModalAction(index));
                dispatch(deleteRemoteKeysConfirmAction());
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
            message={`Sei sicuro di voler cancellare le chiavi ${deletingKeys.join(", ")}?`}
            buttons={[
                <Button onClick={() => cancel()}>Annulla</Button>,
                <Button color="blue" onClick={() => confirm()}>
                    Conferma
                </Button>,
            ]}
        />
    );
};

export default ConfirmDeleteRemoteKeysModal;
