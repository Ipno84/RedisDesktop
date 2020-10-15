import React, { useEffect, useRef, useState } from "react";

import Styled from "./styled";

const Mover = () => {
    const ref = useRef(null);
    const [posX, setPosX] = useState(null);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setPosX(rect.x);
        }
    }, [setPosX]);

    useEffect(() => {
        if (posX !== null && ref.current && ref.current.parentNode) {
            ref.current.parentNode.style.width = `${posX}px`;
        }
    }, [posX]);

    return (
        <Styled
            ref={ref}
            draggable={true}
            onDrag={(e) => {
                e.preventDefault();
                if (e.clientX !== 0 && posX !== e.clientX) setPosX(e.clientX);
            }}
            onDragEnd={(e) => {
                if (e.clientX !== 0 && posX !== e.clientX) setPosX(e.clientX);
            }}
            onDragStart={(e) => {
                if (e.clientX !== 0 && posX !== e.clientX) setPosX(e.clientX);
            }}
        />
    );
};

export default Mover;
