import { Button, Dialog } from "react-desktop/macOs";
import React, { useCallback, useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";

import closeModalAction from "./../../../../state/actions/closeModalAction";
import getSelectedRedisClientNameSelector from "./../../../../state/selectors/getSelectedRedisClientNameSelector";
import removeRedisClientActionSuccess from "./../../../../state/actions/removeRedisClientActionSuccess";

const ConfirmRedisClientDeletationModal = ({ index }) => {
    const dispatch = useDispatch();
    const cancel = useCallback(() => dispatch(closeModalAction(index)), [dispatch, index]);
    const redisClientName = useSelector(state => getSelectedRedisClientNameSelector(state));
    const confirm = useCallback(
        () =>
            batch(() => {
                dispatch(removeRedisClientActionSuccess());
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
            title="Conferma cancellazione"
            message={`Sei sicuro di voler cancellare il Redis client denominato ${redisClientName}?`}
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
