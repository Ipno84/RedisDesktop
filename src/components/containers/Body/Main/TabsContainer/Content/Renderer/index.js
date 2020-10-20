import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "react-desktop/macOs";
import ChunkedTokens from "./ChunkedTokens";
import EditContainer from "./EditContainer";
import Prism from "prismjs";
import Styled from "./styled";
import TTL from "./TTL";
import axios from "axios";
import getActiveConnectedClientKeyValueSelector from "../../../../../../../state/selectors/getActiveConnectedClientKeyValueSelector";
import getActiveConnectedClientParserSelector from "../../../../../../../state/selectors/getActiveConnectedClientParserSelector";
import getChunkedTokensSelector from "../../../../../../../state/selectors/ListSelectors/getChunkedTokensSelector";
import getHtmlSelector from "../../../../../../../state/selectors/ListSelectors/getHtmlSelector";
import isActiveConnectedClientValueEditingSelector from "../../../../../../../state/selectors/isActiveConnectedClientValueEditingSelector";
import setChunkedTokensAction from "../../../../../../../state/actions/ListActions/setChunkedTokensAction";
import setCurrentEditedValueAction from "../../../../../../../state/actions/setCurrentEditedValueAction";
import setDomElementsAction from "../../../../../../../state/actions/ListActions/setDomElementsAction";
import setHtmlAction from "../../../../../../../state/actions/ListActions/setHtmlAction";
import setIndexesAction from "../../../../../../../state/actions/ListActions/setIndexesAction";
import setObserverAction from "../../../../../../../state/actions/ListActions/setObserverAction";
import stringify from "qs-stringify";
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
    "spaces-to-tabs": 4,
});

const Renderer = () => {
    const dispatch = useDispatch();
    const codeWrapper = useRef(null);
    const value = useSelector((state) => getActiveConnectedClientKeyValueSelector(state));
    const parser = useSelector((state) => getActiveConnectedClientParserSelector(state));
    const chunkedTokens = useSelector((state) => getChunkedTokensSelector(state));
    const html = useSelector((state) => getHtmlSelector(state));
    const setCurrentEditedValue = useCallback((editedValue) => dispatch(setCurrentEditedValueAction(editedValue)), [dispatch]);
    const setHtml = useCallback((html) => dispatch(setHtmlAction(html)), [dispatch]);
    const setObserver = useCallback((observer) => dispatch(setObserverAction(observer)), [dispatch]);
    const setIndexes = useCallback((payload) => dispatch(setIndexesAction(payload)), [dispatch]);
    const setDomElements = useCallback((domElements) => dispatch(setDomElementsAction(domElements)), [dispatch]);
    const setChunkedTokens = useCallback((tokens) => dispatch(setChunkedTokensAction(tokens)), [dispatch]);
    const isEditing = useSelector((state) => isActiveConnectedClientValueEditingSelector(state));

    const intersectionCallback = useCallback(
        (entries) => {
            const visible = entries.filter((entry) => entry.isIntersecting);
            const notVisible = entries.filter((entry) => !entry.isIntersecting);
            setIndexes({ notVisible, visible });
        },
        [setIndexes]
    );

    useEffect(() => {
        if (codeWrapper && codeWrapper.current && value && parser && chunkedTokens.length) {
            const domElements = codeWrapper.current.querySelectorAll("pre code > span");
            setDomElements([...domElements]);
        }
    }, [codeWrapper, value, parser, chunkedTokens.length, setDomElements]);

    useEffect(() => {
        const getData = async () => {
            if (value) {
                if (!parser) {
                    setHtml(value);
                } else {
                    let content;
                    try {
                        content = unserialize(value);
                        if (parser === "php") content = var_dump(content).toString();
                        if (parser === "javascript") content = JSON.stringify(content, null, 4);
                        content = Prism.tokenize(content, Prism.languages[parser]);
                        setChunkedTokens(content);
                    } catch (error) {
                        try {
                            const data = {
                                inputText: value,
                                inputFormat: "serialized",
                                outputFormat: parser === "php" ? "unserializedv" : "json",
                            };
                            const response = await axios.post("https://www.unserialize.me/?", stringify(data));
                            content = response.data;
                            if (parser === "php") content = content.replace(/"/g, "").toString();
                            if (parser === "javascript") content = JSON.stringify(content, null, 4);
                            content = Prism.tokenize(content, Prism.languages[parser]);
                            setChunkedTokens(content);
                        } catch (e) {
                            const errorMessage = "È stato riscontrato un errore durante il parsing. Il dato potrebbe essere formattato in maniera errata.";
                            setChunkedTokens(Prism.tokenize(JSON.stringify(errorMessage), Prism.languages.javascript));
                        }
                    }
                }
            }
        };
        getData();
    }, [value, parser, setHtml, setChunkedTokens]);

    useEffect(() => {
        if (codeWrapper && codeWrapper.current) {
            codeWrapper.current.scrollTo({
                top: 0,
                left: 0,
            });
        }
    }, [parser, value, codeWrapper]);

    useEffect(() => {
        if (codeWrapper.current) {
            setObserver(
                new IntersectionObserver(intersectionCallback, {
                    root: codeWrapper.current,
                    rootMargin: "300px",
                    threshold: 0,
                })
            );
        }
    }, [codeWrapper, intersectionCallback, setObserver]);

    return (
        <>
            <Styled id="scroller" ref={codeWrapper} isEditing={isEditing}>
                <TTL />
                <Box>
                    {value && (
                        <pre>
                            {parser && chunkedTokens ? (
                                <code style={{ whiteSpace: "pre-wrap", color: "#fff", height: `${chunkedTokens.length * 18}px` }}>
                                    {chunkedTokens.map((chunkedToken, i) => {
                                        return <ChunkedTokens key={`chunkedToken-${i}`} chunkedToken={chunkedToken} index={i} />;
                                    })}
                                </code>
                            ) : !parser ? (
                                <code
                                    contentEditable={isEditing}
                                    style={{ whiteSpace: "pre-wrap", color: "#fff" }}
                                    dangerouslySetInnerHTML={{ __html: html }}
                                    onInput={(e) => setCurrentEditedValue(e.target.innerText)}
                                />
                            ) : null}
                        </pre>
                    )}
                </Box>
            </Styled>
            <EditContainer />
        </>
    );
};

export default Renderer;
