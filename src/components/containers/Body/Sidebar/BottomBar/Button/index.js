import React from "react";
import Styled from "./styled";

const Button = ({ children, onClick }) => {
    return (
        <Styled type="button" onClick={() => onClick && onClick()}>
            {children}
        </Styled>
    );
};

export default Button;
