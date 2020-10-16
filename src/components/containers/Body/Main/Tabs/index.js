import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Styled from "./styled";
import Tab from "./Tab";
import getConnectedRedisClientsSelector from "../../../../../state/selectors/getConnectedRedisClientsSelector";
import setActiveConnectedClientAction from "../../../../../state/actions/setActiveConnectedClientAction";

const Tabs = () => {
    const dispatch = useDispatch();
    const connectedRedisClients = useSelector(state => getConnectedRedisClientsSelector(state));
    const setActiveConnectedClient = useCallback(index => dispatch(setActiveConnectedClientAction(index)), [dispatch]);
    return (
        <Styled>
            {connectedRedisClients.map((connectedRedisClient, i) => (
                <Tab key={connectedRedisClient.name} index={i} onClick={() => setActiveConnectedClient(i)}>
                    {connectedRedisClient.name}
                </Tab>
            ))}
        </Styled>
    );
};

export default Tabs;
