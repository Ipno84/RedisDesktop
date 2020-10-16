import Mover from "../../../../../Mover";
import React from "react";
import Scroll from "./Scroll";
import Styled from "./styled";
import Top from "./Top";

const Side = () => {
    return (
        <Styled>
            <Top />
            <Scroll />
            <Mover />
        </Styled>
    );
};

export default Side;
