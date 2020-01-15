import React from "react";
import Styled from "./styled";
import TerminalInput from "./TerminalInput";
import TerminalResponse from "./TerminalResponse";

const Terminal = () => {
    return (
        <Styled>
            <TerminalResponse />
            <TerminalInput />
        </Styled>
    );
};

export default Terminal;
