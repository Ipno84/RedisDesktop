import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "react-desktop/macOs";
import EditContainer from "./EditContainer";
import Prism from "prismjs";
import Styled from "./styled";
import getActiveConnectedClientKeyValueSelector from "../../../../../../../state/selectors/getActiveConnectedClientKeyValueSelector";
import getActiveConnectedClientParserSelector from "../../../../../../../state/selectors/getActiveConnectedClientParserSelector";
import isActiveConnectedClientValueEditingSelector from "../../../../../../../state/selectors/isActiveConnectedClientValueEditingSelector";
import setCurrentEditedValueAction from "../../../../../../../state/actions/setCurrentEditedValueAction";
import unserialize from "../../../../../../../helpers/unserialize";
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
    const dispatch = useDispatch();
    const codeWrapper = useRef(null);
    const value = useSelector(state => getActiveConnectedClientKeyValueSelector(state));
    const parser = useSelector(state => getActiveConnectedClientParserSelector(state));
    const setCurrentEditedValue = useCallback(editedValue => dispatch(setCurrentEditedValueAction(editedValue)), [dispatch]);
    const isEditing = useSelector(state => isActiveConnectedClientValueEditingSelector(state));
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
                left: 0
            });
        }
    }, [parser, value, codeWrapper]);
    return (
        <>
            <Styled ref={codeWrapper} isEditing={isEditing}>
                <Box>
                    {value && (
                        <pre>
                            {parser ? (
                                <code className={`language-${parser}`} style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: html }} />
                            ) : (
                                <code
                                    contentEditable={isEditing}
                                    style={{ whiteSpace: "pre-wrap", color: "#fff" }}
                                    dangerouslySetInnerHTML={{ __html: html }}
                                    onInput={e => setCurrentEditedValue(e.target.innerText)}
                                />
                            )}
                        </pre>
                    )}
                </Box>
            </Styled>
            <EditContainer />
        </>
    );
};

export default Renderer;
