import React, { useEffect, useRef } from "react";

import ChunkedToken from "./ChunkedToken";
import getObserverSelector from "./../../../../../../../../state/selectors/ListSelectors/getObserverSelector";
import isChunkInSearchResultsSelector from "./../../../../../../../../state/selectors/ListSelectors/isChunkInSearchResultsSelector";
import isChunkVisibleSelector from "./../../../../../../../../state/selectors/ListSelectors/isChunkVisibleSelector";
import { useSelector } from "react-redux";

const ChunkedTokens = ({ chunkedToken, index }) => {
    const element = useRef(null);
    const observer = useSelector(state => getObserverSelector(state));
    const isChunkVisible = useSelector(state => isChunkVisibleSelector(state, index));
    const isChunkInSearchResults = useSelector(state => isChunkInSearchResultsSelector(state, index));
    useEffect(() => {
        const currentElement = element.current;
        if (observer && currentElement) {
            observer.observe(currentElement);
        }
        return () => {
            if (currentElement) observer.unobserve(currentElement);
        };
    }, [element, observer]);
    if (!chunkedToken) return null;
    return (
        <span
            style={{ backgroundColor: isChunkInSearchResults ? "#015cff" : "transparent", color: isChunkInSearchResults ? "#fff !important" : "initial" }}
            ref={element}
        >
            {isChunkVisible ? chunkedToken.map((token, i) => <ChunkedToken key={`token-${i}`} token={token} />) : <div style={{ height: "18px" }} />}
        </span>
    );
};

export default ChunkedTokens;
