import React, { useEffect, useRef } from "react";

import { Box } from "react-desktop/macOs";
import Prism from "prismjs";
import Styled from "./styled";
import getActiveConnectedClientKeyValueSelector from "../../../../../../../state/selectors/getActiveConnectedClientKeyValueSelector";
import getActiveConnectedClientParserSelector from "../../../../../../../state/selectors/getActiveConnectedClientParserSelector";
import unserialize from "locutus/php/var/unserialize";
import { useSelector } from "react-redux";
import var_dump from "locutus/php/var/var_dump";

Prism.plugins.NormalizeWhitespace.setDefaults({
    "remove-trailing": true,
    "remove-indent": true,
    "left-trim": true,
    "right-trim": true,
    indent: 2,
    "break-lines": 80,
    "remove-initial-line-feed": false,
    "tabs-to-spaces": 4,
    "spaces-to-tabs": 4
});

const Renderer = () => {
    const codeWrapper = useRef(null);
    const value = useSelector(state => getActiveConnectedClientKeyValueSelector(state));
    const parser = useSelector(state => getActiveConnectedClientParserSelector(state));
    let html, content;
    if (value) {
        switch (parser) {
            case "php":
                content = var_dump(unserialize(value));
                html = Prism.highlight(content.toString(), Prism.languages.php, "php");
                break;
            case "javascript":
                content = unserialize(value);
                html = Prism.highlight(JSON.stringify(content, null, 4), Prism.languages.javascript, "javascript");
                break;
            default:
                html = value;
        }
    }
    useEffect(() => {
        if (codeWrapper && codeWrapper.current) {
            codeWrapper.current.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }
    }, [parser, value, codeWrapper]);
    return (
        <Styled ref={codeWrapper}>
            <Box>
                <pre>
                    {parser ? (
                        <code className={`language-${parser}`} style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: html }}></code>
                    ) : (
                        <code style={{ whiteSpace: "pre-wrap", color: "#fff" }} dangerouslySetInnerHTML={{ __html: html }}></code>
                    )}
                </pre>
            </Box>
        </Styled>
    );
};

export default Renderer;
