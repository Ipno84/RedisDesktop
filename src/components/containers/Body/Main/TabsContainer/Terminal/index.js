import MaximizeButton from "./MaximizeButton";
import React from "react";
import Styled from "./styled";
import TerminalInput from "./TerminalInput";
import TerminalResponse from "./TerminalResponse";
import isTerminalFullscreenSelector from "../../../../../../state/selectors/isTerminalFullscreenSelector";
import { useSelector } from "react-redux";

const Terminal = () => {
    const isTerminalFullscreen = useSelector(state => isTerminalFullscreenSelector(state));
    return (
        <Styled fullscreen={isTerminalFullscreen}>
            <MaximizeButton />
            <TerminalResponse />
            <TerminalInput />
        </Styled>
    );
};

export default Terminal;
