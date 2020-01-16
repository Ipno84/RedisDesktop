import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Styled from "./styled";
import connectRedisClientAction from "./../../../../../../state/actions/connectRedisClientAction";
import editRedisClientAction from "../../../../../../state/actions/editRedisClientAction";
import isActiveConnectedClientByNameSelector from "./../../../../../../state/selectors/isActiveConnectedClientByNameSelector";
import isClientSelectedSelector from "./../../../../../../state/selectors/isClientSelectedSelector";
import { remote } from "electron";
import setSelectedClientIndexAction from "./../../../../../../state/actions/setSelectedClientIndexAction";

const createContextMenu = remote.getGlobal("createContextMenu");

const Item = ({ item, index }) => {
    const itemRef = useRef(null);
    const isClientSelected = useSelector(state => isClientSelectedSelector(state, index));
    const isActiveConnectedClientByName = useSelector(state => isActiveConnectedClientByNameSelector(state, item.name));
    const dispatch = useDispatch();
    const setSelectedClientIndex = useCallback(index => dispatch(setSelectedClientIndexAction(index)), [dispatch]);
    const connect = useCallback(() => dispatch(connectRedisClientAction(false)), [dispatch]);
    const editRedisClient = useCallback(index => dispatch(editRedisClientAction(index)), [dispatch]);
    useEffect(() => {
        itemRef.current.addEventListener("contextmenu", function(e) {
            const menuItems = [
                {
                    label: "Modifica",
                    click: (menuItem, browserWindow, event) => editRedisClient(index)
                }
            ];
            const menu = createContextMenu(menuItems);
            menu.popup();
        });
    }, [item, itemRef]);
    return (
        <Styled
            active={isActiveConnectedClientByName}
            onClick={() => setSelectedClientIndex(index)}
            onDoubleClick={() => connect()}
            selected={isClientSelected}
            ref={itemRef}
        >
            {item.name}
        </Styled>
    );
};

export default Item;
