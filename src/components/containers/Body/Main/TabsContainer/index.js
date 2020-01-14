import Content from "./Content";
import React from "react";
import Side from "./Side";
import Styled from "./styled";
import XTerm from "./XTerm";

const TabsContainer = () => {
    return (
        <>
            <Styled>
                <Side />
                <Content />
            </Styled>
            <XTerm />
        </>
    );
};

export default TabsContainer;
