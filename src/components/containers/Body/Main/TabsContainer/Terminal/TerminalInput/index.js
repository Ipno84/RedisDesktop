import React, { useState } from "react";

import Styled from "./styled";
import { exec } from "child_process";

const TerminalInput = () => {
    const [command, setCommand] = useState("");
    const onChange = e => {
        setCommand(e.target.value);
    };
    const onSubmit = e => {
        e.preventDefault();
        try {
            const res = exec(command);
            res.stdout.on("data", data => {
                console.log("response", data);
            });
            res.stderr.on("data", err => {
                console.log("err", err);
            });
            res.on("exit", code => {
                console.log("code", code);
            });
        } catch (error) {
            console.error(error);
        }
        setCommand("");
    };
    return (
        <Styled onSubmit={onSubmit}>
            <input type="text" value={command} onChange={onChange} />
        </Styled>
    );
};

export default TerminalInput;
