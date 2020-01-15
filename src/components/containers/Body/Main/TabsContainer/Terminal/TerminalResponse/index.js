import React, { useEffect, useRef } from "react";

import Styled from "./styled";
import getActiveConnectedClientIndexSelector from "../../../../../../../state/selectors/getActiveConnectedClientIndexSelector";
import getActiveConnectedClientShellsSelector from "../../../../../../../state/selectors/getActiveConnectedClientShellsSelector";
import usePrev from "../../../../../../../hooks/usePrev";
import { useSelector } from "react-redux";

const TerminalResponse = () => {
    const scrollerRef = useRef(null);
    const shells = useSelector(state => getActiveConnectedClientShellsSelector(state));
    const prevShells = usePrev(shells);
    const currentClientIndex = useSelector(state => getActiveConnectedClientIndexSelector(state));
    useEffect(() => {
        if (
            scrollerRef &&
            scrollerRef.current &&
            prevShells &&
            prevShells.length === shells.length &&
            shells[shells.length - 1] &&
            shells[shells.length - 1].response &&
            !prevShells[prevShells.length - 1].response
        ) {
            scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
        }
    }, [prevShells, shells, scrollerRef]);
    return (
        <Styled
            ref={scrollerRef}
            onClick={() => {
                const el = document.querySelector(`#terminal-${currentClientIndex}`);
                if (el) {
                    el.focus();
                }
            }}
        >
            {shells.map(({ command, response }, i) => {
                return (
                    <div key={`${command}-${i}`}>
                        {command && <div>$ {command}</div>}
                        {response && <pre>{response}</pre>}
                    </div>
                );
            })}
        </Styled>
    );
};

export default TerminalResponse;
