import { Box, Text } from "react-desktop/macOs";

import Item from "./../Item";
import React from "react";
import Styled from "./styled";
import getRedisClientsSelector from "./../../../../../../state/selectors/getRedisClientsSelector";
import { useSelector } from "react-redux";

const ClientList = () => {
    const redisClients = useSelector(state => getRedisClientsSelector(state));
    if (!redisClients || (redisClients && redisClients.length === 0)) {
        return (
            <Box margin="0 0.8rem">
                <Text>Aggiungi un client Redis ai tuoi preferiti per poterti connettere più rapidamente in futuro</Text>
            </Box>
        );
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
