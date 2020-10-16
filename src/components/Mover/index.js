import React, { useCallback, useEffect, useRef, useState } from "react";

import Styled from "./styled";

const Mover = () => {
    const ref = useRef(null);
    const [posX, setPosX] = useState(null);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const parentRectX = ref.current.parentNode ? ref.current.parentNode.getBoundingClientRect().x : 0;
            setPosX(rect.x - parentRectX);
        }
    }, [setPosX]);

    useEffect(() => {
        if (posX !== null && ref.current && ref.current.parentNode) {
            ref.current.parentNode.style.width = `${posX}px`;
            ref.current.parentNode.style.position = "relative";
        }
    }, [posX]);

    const setPosXCallback = useCallback(
        (e) => {
            if (e.type === "drag") e.preventDefault();
            const parentRectX = ref.current.parentNode ? ref.current.parentNode.getBoundingClientRect().x : 0;
            if (e.clientX !== 0 && posX !== e.clientX) setPosX(e.clientX - parentRectX);
        },
        [posX, setPosX]
    );

    return <Styled ref={ref} draggable={true} onDrag={setPosXCallback} onDragEnd={setPosXCallback} onDragStart={setPosXCallback} />;
};

export default Mover;
