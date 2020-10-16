import Content from "./Content";
import React from "react";
import Side from "./Side";
import Styled from "./styled";
// import Terminal from "./Terminal";

const TabsContainer = () => {
    return (
        <>
            <Styled>
                <Side />
                <Content />
            </Styled>
            {/* <Terminal /> */}
        </>
    );
};

export default TabsContainer;
