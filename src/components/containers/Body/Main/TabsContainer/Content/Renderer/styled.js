import styled from "styled-components";

export default styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    background-color: #000;
    overflow: auto;
    word-break: break-all;
    user-select: auto !important;
    * {
        user-select: auto !important;
        cursor: text;
        &::selection {
            background-color: #015cff !important;
            color: #fff !important;
        }
    }
    pre {
        margin: 0;
        padding-bottom: 1.2rem;
        user-select: auto;
    }
`;
