import { Box, Text } from "react-desktop/macOs";

import Prism from "prismjs";
import React from "react";
import Styled from "./styled";
import getActiveConnectedClientKeyValueSelector from "../../../../../../../state/selectors/getActiveConnectedClientKeyValueSelector";
import unserialize from "locutus/php/var/unserialize";
import { useSelector } from "react-redux";
import var_dump from "locutus/php/var/var_dump";

const Renderer = () => {
    const value = useSelector(state => getActiveConnectedClientKeyValueSelector(state));
    let html;
    console.log(Prism.languages);
    if (value) {
        html = Prism.highlight(var_dump(unserialize(value)), Prism.languages.javascript);
    }
    return (
        <Styled>
            <Box>
                <pre style={{ whiteSpace: "pre-wrap" }}>
                    <code className="language-php" dangerouslySetInnerHTML={{ __html: html }}></code>
                </pre>
            </Box>
        </Styled>
    );
};

export default Renderer;
