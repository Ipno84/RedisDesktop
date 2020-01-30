import React, { memo, useEffect, useRef } from "react";

import ChunkedToken from "./ChunkedToken";
import getObserverSelector from "./../../../../../../../../state/selectors/ListSelectors/getObserverSelector";
import isChunkVisibleSelector from "./../../../../../../../../state/selectors/ListSelectors/isChunkVisibleSelector";
import { useSelector } from "react-redux";

const ChunkedTokens = ({ chunkedToken, index }) => {
    const element = useRef(null);
    const observer = useSelector(state => getObserverSelector(state));
    const isChunkVisible = useSelector(state => isChunkVisibleSelector(state, index));
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
        <span ref={element}>
            {isChunkVisible ? chunkedToken.map((token, i) => <ChunkedToken key={`token-${i}`} token={token} />) : <div style={{ height: "18px" }} />}
        </span>
    );
};

export default memo(ChunkedTokens);
