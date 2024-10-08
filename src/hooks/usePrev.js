import { useEffect, useRef } from "react";

export default function usePrev(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
