import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "react-desktop/macOs";
import Styled from "./styled";
import connectedRedisClientHasKeyValueSelector from "../../../../../../../../state/selectors/connectedRedisClientHasKeyValueSelector";
import getActiveConnectedClientKeyValueSelector from "../../../../../../../../state/selectors/getActiveConnectedClientKeyValueSelector";
import getActiveConnectedClientParserSelector from "../../../../../../../../state/selectors/getActiveConnectedClientParserSelector";
import hasCurrentRedisClientSelectedKeySelector from "../../../../../../../../state/selectors/hasCurrentRedisClientSelectedKeySelector";
import isActiveConnectedClientValueEditingSelector from "../../../../../../../../state/selectors/isActiveConnectedClientValueEditingSelector";
import setCurrentEditedValueAction from "../../../../../../../../state/actions/setCurrentEditedValueAction";
import setRemoteValueAction from "../../../../../../../../state/actions/setRemoteValueAction";

const Renderer = () => {
    const dispatch = useDispatch();
    const isEditing = useSelector(state => isActiveConnectedClientValueEditingSelector(state));
    const hasSelectedKey = useSelector(state => hasCurrentRedisClientSelectedKeySelector(state));
    const value = useSelector(state => getActiveConnectedClientKeyValueSelector(state));
    const connectedRedisClientHasKeyValue = useSelector(state => connectedRedisClientHasKeyValueSelector(state));
    const parser = useSelector(state => getActiveConnectedClientParserSelector(state));
    const setCurrentEditedValue = useCallback(editedValue => dispatch(setCurrentEditedValueAction(editedValue)), [dispatch]);
    const setRemoteValue = useCallback(() => dispatch(setRemoteValueAction()), [dispatch]);
    if (!parser && connectedRedisClientHasKeyValue && hasSelectedKey) {
        return (
            <Styled>
                {isEditing && (
                    <Button marginRight={10} type="button" color="white" onClick={() => setCurrentEditedValue(undefined)}>
                        Annulla
                    </Button>
                )}
                <Button
                    type="button"
                    color="blue"
                    onClick={() => {
                        if (isEditing) {
                            setRemoteValue();
                        } else {
                            setCurrentEditedValue(value);
                        }
                    }}
                >
                    {isEditing ? "Salva" : "Modifica"}
                </Button>
            </Styled>
        );
    }
    return null;
};

export default Renderer;
