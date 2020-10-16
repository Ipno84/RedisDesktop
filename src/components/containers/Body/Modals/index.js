import {
    DELETE_REMOTE_KEY_MODAL_KEY,
    DELETE_REMOTE_KEY_MODAL_KEYS,
    GENERIC_ERROR_MODAL_KEY,
    REMOVE_REDIS_CLIENT_MODAL_KEY,
    SET_REMOTE_VALUE_MODAL_KEY,
} from "../../../../constants/ModalsConstants";

import Backdraw from "./Backdraw";
import ConfirmDeleteRemoteKeyModal from "./ConfirmDeleteRemoteKeyModal";
import ConfirmDeleteRemoteKeysModal from "./ConfirmDeleteRemoteKeysModal";
import ConfirmRedisClientDeletationModal from "./ConfirmRedisClientDeletationModal";
import ConfirmSetRemoteValueModal from "./ConfirmSetRemoteValueModal";
import GenericErrorAlert from "./GenericErrorAlert";
import React from "react";
import Styled from "./styled";
import getCurrentActiveModalsSelector from "../../../../state/selectors/getCurrentActiveModalsSelector";
import usePrev from "../../../../hooks/usePrev";
import { useSelector } from "react-redux";

const modalsMap = {
    [REMOVE_REDIS_CLIENT_MODAL_KEY]: ConfirmRedisClientDeletationModal,
    [SET_REMOTE_VALUE_MODAL_KEY]: ConfirmSetRemoteValueModal,
    [DELETE_REMOTE_KEY_MODAL_KEY]: ConfirmDeleteRemoteKeyModal,
    [DELETE_REMOTE_KEY_MODAL_KEYS]: ConfirmDeleteRemoteKeysModal,
    [GENERIC_ERROR_MODAL_KEY]: GenericErrorAlert,
};

const Modals = () => {
    const activeModals = useSelector((state) => getCurrentActiveModalsSelector(state));
    const prevActiveModals = usePrev(activeModals) || [];
    const isOpen = activeModals.length > prevActiveModals.length;
    const modals = isOpen ? activeModals : prevActiveModals;
    return (
        <>
            <Styled isOpen={activeModals.length > prevActiveModals.length}>
                {modals.map((activeModal, i) => {
                    const Component = modalsMap[activeModal];
                    if (!Component) return null;
                    return <Component key={activeModal + i} index={i} />;
                })}
            </Styled>
            <Backdraw isOpen={isOpen} />
        </>
    );
};

export default Modals;
