import React from "react";
import Renderer from "./Renderer";
import Search from "./Search";
import Styled from "./styled";
import SwitchType from "./SwitchType";

const Content = () => {
    return (
        <Styled>
            <SwitchType />
            <Renderer />
            <Search />
        </Styled>
    );
};

export default Content;
