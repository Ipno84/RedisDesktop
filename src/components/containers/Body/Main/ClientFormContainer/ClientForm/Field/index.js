import React from "react";
import Styled from "./styled";

const ClientForm = ({ children, reduced }) => {
    return <Styled reduced={reduced}>{children}</Styled>;
};

export default ClientForm;
