import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Styled from "./styled";
import { exec } from "child_process";
import getActiveConnectedClientIndexSelector from "../../../../../../../state/selectors/getActiveConnectedClientIndexSelector";
import getConnectedRedisClientConnectionCommandSelector from "../../../../../../../state/selectors/getConnectedRedisClientConnectionCommandSelector";
import setRedisShellAction from "./../../../../../../../state/actions/setRedisShellAction";

const TerminalInput = () => {
    const responseRef = useRef("");
    const dispatch = useDispatch();
    const setRedisShell = useCallback(({ command, response }) => dispatch(setRedisShellAction({ command, response })), [dispatch]);
    const [command, setCommand] = useState("");
    const currentClientIndex = useSelector(state => getActiveConnectedClientIndexSelector(state));
    const connectionCommand = useSelector(state => getConnectedRedisClientConnectionCommandSelector(state));
    let timeout;
    useEffect(() => {
        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [timeout]);
    const onChange = e => setCommand(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        try {
            setRedisShell({ command });
            const res = exec([connectionCommand, command].join(" "), {
                encoding: "utf8",
                timeout: 0,
                maxBuffer: 1024 * 1024 * 1024,
                killSignal: "SIGTERM",
                cwd: null,
                env: null
            });
            res.stdout.on("data", response => {
                responseRef.current = responseRef.current + response;
                timeout = setTimeout(() => {
                    setRedisShell({ response: responseRef.current });
                    responseRef.current = "";
                }, 100);
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
