import React from "react";
import Styled from "./styled";
import getActiveConnectedClientKeysSelector from "../../../../../../../state/selectors/getActiveConnectedClientKeysSelector";
import { useSelector } from "react-redux";

const Scroll = () => {
    const keys = useSelector(state => getActiveConnectedClientKeysSelector(state));
    console.log(keys);
    return (
        <Styled>
            {keys.map(key => (
                <p key={key}>{key}</p>
            ))}
        </Styled>
    );
};

export default Scroll;
