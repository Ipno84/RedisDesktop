import "xterm/css/xterm.css";

import React, { useEffect, useRef, useState } from "react";

import { FitAddon } from "xterm-addon-fit";
import Styled from "./styled";
import { Terminal } from "xterm";

const XTerm = () => {
    const termRef = useRef(null);
    const term = new Terminal();
    const fitAddon = new FitAddon();
    useEffect(() => {
        if (termRef.current) {
            term.open(termRef.current);
            term.loadAddon(fitAddon);
            fitAddon.fit();
            term.write(" $ ");
        }
    }, [term, fitAddon]);

    useEffect(() => {
        term.onKey(e => {
            if (e.domEvent.key === "Enter") {
                term.writeln("");
                term.write(" $ ");
            } else {
                term.write(e.key);
            }
        });
        term.onData(e => {});
    }, [term]);

    return (
        <Styled>
            <div ref={termRef} />
        </Styled>
    );
};

export default XTerm;
