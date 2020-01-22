import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Styled from "./styled";
import deleteRemoteKeyAction from "./../../../../../../../../state/actions/deleteRemoteKeyAction";
import isCurrentKeyActiveSelector from "./../../../../../../../../state/selectors/isCurrentKeyActiveSelector";
import { remote } from "electron";
import setActiveRedisSelectedKeyAction from "./../../../../../../../../state/actions/setActiveRedisSelectedKeyAction";

const createContextMenu = remote.getGlobal("createContextMenu");

const Item = ({ children, style }) => {
    const dispatch = useDispatch();
    const itemRef = useRef(null);
    const isCurrentKeyActive = useSelector(state => isCurrentKeyActiveSelector(state, children));
    const setActiveRedisSelectedKey = useCallback(() => dispatch(setActiveRedisSelectedKeyAction(children)), [dispatch, children]);
    const deleteRemoteKey = useCallback(key => dispatch(deleteRemoteKeyAction(key)), [dispatch]);

    const onContextMenu = useCallback(
        e => {
            window.focus();
            const menuItems = [
                {
                    label: "Copia",
                    click: () => navigator.clipboard.writeText(e.target.innerHTML).catch(e => console.error(e))
                },
                {
                    label: "Cancella",
                    click: () => deleteRemoteKey(e.target.innerText)
                }
            ];
            const menu = createContextMenu(menuItems);
            if (document.hasFocus()) menu.popup();
        },
        [deleteRemoteKey]
    );

    useEffect(() => {
        const currentItem = itemRef.current;
        currentItem.addEventListener("contextmenu", onContextMenu, false);
        return () => {
            currentItem.removeEventListener("contextmenu", onContextMenu, false);
        };
    }, [children, onContextMenu]);

    return (
        <div style={style}>
            <Styled ref={itemRef} isActive={isCurrentKeyActive} onClick={() => setActiveRedisSelectedKey()}>
                {children}
            </Styled>
        </div>
    );
};

export default Item;
