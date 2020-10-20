import React from "react";
import Styled from "./styled";
import getActiveConnectedClientKeyTtlSelector from "../../../../../../../../state/selectors/getActiveConnectedClientKeyTtlSelector";
import { useSelector } from "react-redux";

const TTL = () => {
    const ttl = useSelector((state) => getActiveConnectedClientKeyTtlSelector(state));
    if (!ttl && ttl < 0) return null;
    return <Styled>TTL: {ttl}</Styled>;
};

export default TTL;
