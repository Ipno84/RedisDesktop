import React from "react";
import Styled from "./styled";

const ClientForm = ({ children, inverted }) => {
    return <Styled inverted={inverted}>{children}</Styled>;
};

export default ClientForm;
