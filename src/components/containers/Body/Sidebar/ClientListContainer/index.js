import List from "./List";
import ListHeader from "./ListHeader";
import React from "react";
import Styled from "./styled";

const ClientList = () => {
    return (
        <Styled>
            <ListHeader>Preferiti</ListHeader>
            <List />
        </Styled>
    );
};

export default ClientList;
