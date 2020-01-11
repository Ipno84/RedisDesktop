import React from "react";
import Styled from "./styled";

const Button = ({ children }) => {
    return <Styled type="button">{children}</Styled>;
};

export default Button;
