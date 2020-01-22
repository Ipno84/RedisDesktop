import React from "react";
import Styled from "./styled";

const ClientForm = ({ children, reduced, className }) => {
    return (
        <Styled className={className} reduced={reduced}>
            {children}
        </Styled>
    );
};

export default ClientForm;
