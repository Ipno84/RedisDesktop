import styled from "styled-components";

export default styled.form`
    position: relative;
    &:before {
        content: "$";
        position: absolute;
        color: #0be00b;
        bottom: 1.1rem;
        left: 1.1rem;
        font-family: monospace;
    }
    input {
        background: black;
        height: 2.4rem;
        color: #0be00b;
        border: none;
        width: 100%;
        box-sizing: border-box;
        padding: 0 1rem 0 2.2rem;
        outline: none;
        font-family: monospace;
        padding-bottom: 1rem;
    }
`;
