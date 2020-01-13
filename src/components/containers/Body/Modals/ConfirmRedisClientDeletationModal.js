import { Button, Dialog } from "react-desktop/macOs";
import React, { useCallback } from "react";
import { batch, useDispatch } from "react-redux";

import closeModalAction from "./../../../../state/actions/closeModalAction";
import removeRedisClientActionSuccess from "./../../../../state/actions/removeRedisClientActionSuccess";

const ConfirmRedisClientDeletationModal = ({ index }) => {
    const dispatch = useDispatch();
    const cancel = useCallback(() => dispatch(closeModalAction(index)), [dispatch, index]);
    const confirm = useCallback(
        () =>
            batch(() => {
                dispatch(removeRedisClientActionSuccess());
                dispatch(closeModalAction(index));
            }),
        [dispatch, batch, index]
    );
    return (
        <Dialog
            title="Conferma cancellazione Redis client"
            message="Sei sicuro di voler cancellare il Redis client denominato Cippa Lippa?"
            buttons={[
                <Button onClick={() => cancel()}>Annulla</Button>,
                <Button color="blue" onClick={() => confirm()}>
                    Conferma
                </Button>
            ]}
        />
    );
};

export default ConfirmRedisClientDeletationModal;
