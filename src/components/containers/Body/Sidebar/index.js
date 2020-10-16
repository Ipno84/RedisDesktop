import BottomBar from "./BottomBar";
import ClientListContainer from "./ClientListContainer";
import Mover from "./../../../Mover";
import React from "react";
import Styled from "./styled";

const Sidebar = () => {
    return (
        <Styled>
            <ClientListContainer />
            <BottomBar />
            <Mover />
        </Styled>
    );
};

export default Sidebar;
