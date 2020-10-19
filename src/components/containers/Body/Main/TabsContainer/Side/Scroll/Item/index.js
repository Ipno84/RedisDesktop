import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Styled from "./styled";
import deleteRemoteKeyAction from "./../../../../../../../../state/actions/deleteRemoteKeyAction";
import deleteRemoteKeysAction from "./../../../../../../../../state/actions/deleteRemoteKeysAction";
import getActiveConnectedClientSelectedKeysSelector from "./../../../../../../../../state/selectors/getActiveConnectedClientSelectedKeysSelector";
import isCurrentKeyActiveSelector from "./../../../../../../../../state/selectors/isCurrentKeyActiveSelector";
import isCurrentKeySelectedSelector from "./../../../../../../../../state/selectors/isCurrentKeySelectedSelector";
import refreshActiveRedisSelectedKeyAction from "./../../../../../../../../state/actions/refreshActiveRedisSelectedKeyAction";
import { remote } from "electron";
import setActiveRedisSelectedKeyAction from "./../../../../../../../../state/actions/setActiveRedisSelectedKeyAction";
import toggleMultiSelectedKeyAction from "./../../../../../../../../state/actions/toggleMultiSelectedKeyAction";
import toggleSelectedKeyAction from "./../../../../../../../../state/actions/toggleSelectedKeyAction";

const createContextMenu = remote.getGlobal("createContextMenu");

const Item = ({ children, style }) => {
    const dispatch = useDispatch();
    const itemRef = useRef(null);
    const isCurrentKeyActive = useSelector((state) => isCurrentKeyActiveSelector(state, children));
    const isCurrentKeySelected = useSelector((state) => isCurrentKeySelectedSelector(state, children));
    const activeConnectedClientSelectedKeys = useSelector((state) => getActiveConnectedClientSelectedKeysSelector(state));
    const setActiveRedisSelectedKey = useCallback(() => dispatch(setActiveRedisSelectedKeyAction(children)), [dispatch, children]);
    const resetActiveRedisSelectedKey = useCallback(() => dispatch(setActiveRedisSelectedKeyAction("")), [dispatch]);
    const refreshActiveRedisSelectedKey = useCallback(() => dispatch(refreshActiveRedisSelectedKeyAction()), [dispatch]);
    const toggleSelectedKey = useCallback(() => dispatch(toggleSelectedKeyAction(children)), [dispatch, children]);
    const toggleMultiSelectedKey = useCallback(() => dispatch(toggleMultiSelectedKeyAction(children)), [dispatch, children]);
    const deleteRemoteKey = useCallback((key) => dispatch(deleteRemoteKeyAction(key)), [dispatch]);
    const deleteRemoteKeys = useCallback((keys) => dispatch(deleteRemoteKeysAction(keys)), [dispatch]);

    const onContextMenu = useCallback(
        (e) => {
            window.focus();
            let menuItems = [
                {
                    label: "Copia",
                    click: () => navigator.clipboard.writeText(e.target.innerHTML).catch((e) => console.error(e)),
                },
                {
                    label: "Cancella",
                    click: () => deleteRemoteKey(e.target.innerText),
                },
            ];
            if (isCurrentKeyActive) {
                menuItems = [
                    ...menuItems,
                    {
                        label: "Refresh",
                        click: () => refreshActiveRedisSelectedKey(),
                    },
                ];
            }
            if (activeConnectedClientSelectedKeys.length > 1) {
                menuItems = [
                    ...menuItems,
                    {
                        label: "Cancella Selezionati",
                        click: () => deleteRemoteKeys(activeConnectedClientSelectedKeys),
                    },
                ];
            }
            const menu = createContextMenu(menuItems);
            if (document.hasFocus()) menu.popup();
        },
        [isCurrentKeyActive, deleteRemoteKey, deleteRemoteKeys, activeConnectedClientSelectedKeys, refreshActiveRedisSelectedKey]
    );

    const onItemClick = useCallback(
        (e) => {
            const cmdOrCtrl = e.ctrlKey || e.metaKey;
            const shift = e.shiftKey;
            if (!cmdOrCtrl && !shift) {
                !isCurrentKeyActive ? setActiveRedisSelectedKey() : resetActiveRedisSelectedKey();
            } else if (cmdOrCtrl) {
                toggleSelectedKey();
            } else if (shift) {
                toggleMultiSelectedKey();
            }
        },
        [isCurrentKeyActive, setActiveRedisSelectedKey, resetActiveRedisSelectedKey, toggleSelectedKey, toggleMultiSelectedKey]
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
            <Styled ref={itemRef} isActive={isCurrentKeyActive} isSelected={isCurrentKeySelected} onClick={onItemClick}>
                {children}
            </Styled>
        </div>
    );
};

export default Item;
