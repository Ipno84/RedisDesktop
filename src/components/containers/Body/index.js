import Container from "./styled";
import Main from "./Main";
import Modals from "./Modals";
import React from "react";
import Sidebar from "./Sidebar";

const Body = () => {
    return (
        <Container>
            <Modals />
            <Sidebar />
            <Main />
        </Container>
    );
};

export default Body;
