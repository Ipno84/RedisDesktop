import Item from "./Item";
import React from "react";
import Styled from "./styled";
import getActiveConnectedClientKeysSelector from "../../../../../../../state/selectors/getActiveConnectedClientKeysSelector";
import { useSelector } from "react-redux";

const Scroll = () => {
    const keys = useSelector(state => getActiveConnectedClientKeysSelector(state));
    return (
        <Styled>
            {keys.map(key => (
                <Item key={key}>{key}</Item>
            ))}
        </Styled>
    );
};

export default Scroll;
