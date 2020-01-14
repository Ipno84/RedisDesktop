import BottomBar from "./BottomBar";
import ClientListContainer from "./ClientListContainer";
import React from "react";
import Styled from "./styled";

const Sidebar = () => {
    return (
        <Styled>
            <ClientListContainer />
            <BottomBar />
        </Styled>
    );
};

export default Sidebar;
