import BottomBar from "./BottomBar";
import ClientListContainer from "./ClientListContainer";
import React from "react";
//import Redis from "ioredis";
import Styled from "./styled";

const Sidebar = () => {
    /*try {
        const client = new Redis({
            port: 12051, // Redis port
            host: "redis-12051.c90.us-east-1-3.ec2.cloud.redislabs.com", // Redis host
            family: 4, // 4 (IPv4) or 6 (IPv6)
            password: "GEVYidqI7NVg7qBrVLzBSj5LwthsE0VR"
        });
        console.log(client);
    } catch (error) {
        console.log(error);
    }*/
    return (
        <Styled>
            <ClientListContainer />
            <BottomBar />
        </Styled>
    );
};

export default Sidebar;
