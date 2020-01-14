import React from "react";
import Styled from "./styled";
import getActiveConnectedClientSelector from "../../../../../../state/selectors/getActiveConnectedClientSelector";
import { useSelector } from "react-redux";

const Content = () => {
    const client = useSelector(state => getActiveConnectedClientSelector(state));
    return <Styled>{client.name}</Styled>;
};

export default Content;
