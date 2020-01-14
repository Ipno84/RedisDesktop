import React from "react";
import Renderer from "./Renderer";
import Styled from "./styled";
import SwitchType from "./SwitchType";

const Content = () => {
    return (
        <Styled>
            <SwitchType />
            <Renderer />
        </Styled>
    );
};

export default Content;
