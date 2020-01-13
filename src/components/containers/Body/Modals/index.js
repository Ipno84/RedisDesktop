import ConfirmRedisClientDeletationModal from "./ConfirmRedisClientDeletationModal";
import { REMOVE_REDIS_CLIENT_MODAL_KEY } from "../../../../constants/ModalsConstants";
import React from "react";
import Styled from "./styled";
import getCurrentActiveModalsSelector from "../../../../state/selectors/getCurrentActiveModalsSelector";
import usePrev from "../../../../hooks/usePrev";
import { useSelector } from "react-redux";

const modalsMap = {
    [REMOVE_REDIS_CLIENT_MODAL_KEY]: ConfirmRedisClientDeletationModal
};

const Modals = () => {
    const activeModals = useSelector(state => getCurrentActiveModalsSelector(state));
    const prevActiveModals = usePrev(activeModals) || [];
    const isOpen = activeModals.length > prevActiveModals.length;
    const modals = isOpen ? activeModals : prevActiveModals;
    return (
        <Styled isOpen={activeModals.length > prevActiveModals.length}>
            {modals.map((activeModal, i) => {
                const Component = modalsMap[activeModal];
                if (!Component) return null;
                return <Component key={activeModal + i} index={i} />;
            })}
        </Styled>
    );
};

export default Modals;
