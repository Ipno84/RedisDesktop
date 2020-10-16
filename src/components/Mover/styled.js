import styled from "styled-components";

export default styled.div`
    width: 6px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -3px;
    cursor: col-resize;
    opacity: 0;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        background-color: #000;
        width: 1px;
        left: 50%;
        transform: translateX(-50%);
    }
`;
