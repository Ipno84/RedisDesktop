import Container from "./styled";
import Main from "./Main";
import React from "react";
import Sidebar from "./Sidebar";

const Body = () => {
    return (
        <Container>
            <Sidebar />
            <Main />
        </Container>
    );
};

export default Body;
