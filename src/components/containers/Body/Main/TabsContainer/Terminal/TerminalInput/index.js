import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Styled from "./styled";
import { exec } from "child_process";
import getActiveConnectedClientIndexSelector from "../../../../../../../state/selectors/getActiveConnectedClientIndexSelector";
import { remote } from "electron";
import setRedisShellAction from "./../../../../../../../state/actions/setRedisShellAction";

const redisCliPath = remote.getGlobal("redisCliPath");

const TerminalInput = () => {
    const dispatch = useDispatch();
    const setRedisShell = useCallback(({ command, response }) => dispatch(setRedisShellAction({ command, response })), [dispatch]);
    const [command, setCommand] = useState("");
    const currentClientIndex = useSelector(state => getActiveConnectedClientIndexSelector(state));
    const onChange = e => setCommand(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        try {
            setRedisShell({ command });
            let currentCommand = command;
            currentCommand = currentCommand.replace("redis-cli", `node ${redisCliPath}`);
            const res = exec(currentCommand);
            res.stdout.on("data", response => {
                setRedisShell({ response });
            });
            res.stderr.on("data", response => {
                setRedisShell({ response });
            });
        } catch (error) {
            console.error(error);
        }
        setCommand("");
    };
    return (
        <Styled onSubmit={onSubmit}>
            <input id={`terminal-${currentClientIndex}`} type="text" value={command} onChange={onChange} />
        </Styled>
    );
};

export default TerminalInput;
