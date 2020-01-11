import React, { useState } from "react";

import Item from "./../Item";
import Styled from "./styled";
import getRedisClientsSelector from "./../../../../../../state/selectors/getRedisClientsSelector";
import { useSelector } from "react-redux";

const ClientList = () => {
    const redisClients = useSelector(state => getRedisClientsSelector(state));
    if (!redisClients || (redisClients && redisClients.length === 0)) {
        return null;
    }

    return (
        <Styled>
            {redisClients.map((redisClient, i) => (
                <Item key={`redisClient-${i}`} item={redisClient} index={i} />
            ))}
        </Styled>
    );
};

export default ClientList;
