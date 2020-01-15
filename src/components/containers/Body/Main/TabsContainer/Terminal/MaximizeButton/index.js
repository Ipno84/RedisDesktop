import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "react-desktop/macOs";
import Styled from "./styled";
import isTerminalFullscreenSelector from "../../../../../../../state/selectors/isTerminalFullscreenSelector";
import toggleFullscreenAction from "../../../../../../../state/actions/toggleFullscreenAction";

const MaximizeButton = () => {
    const dispatch = useDispatch();
    const isTerminalFullscreen = useSelector(state => isTerminalFullscreenSelector(state));
    const toggleFullscreen = useCallback(() => dispatch(toggleFullscreenAction()), [dispatch]);
    const onEscKey = e => {
        if (e.key.toLowerCase() === "escape" && isTerminalFullscreen) {
            toggleFullscreen();
        }
    };
    useEffect(() => {
        document.addEventListener("keyup", onEscKey);
        return () => {
            document.removeEventListener("keyup", onEscKey);
        };
    }, [onEscKey]);
    return (
        <Styled>
            <Button onClick={toggleFullscreen} color="blue">
                {isTerminalFullscreen ? "Riduci" : "Fullscreen"}
            </Button>
        </Styled>
    );
};

export default MaximizeButton;
