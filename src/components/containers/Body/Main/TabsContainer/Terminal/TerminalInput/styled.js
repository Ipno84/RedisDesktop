import styled from "styled-components";

export default styled.form`
    position: relative;
    &:before {
        content: "$";
        position: absolute;
        color: #0be00b;
        bottom: 0.5rem;
        left: 0.5rem;
    }
    input {
        background: black;
        height: 2rem;
        color: #0be00b;
        border: none;
        width: 100%;
        box-sizing: border-box;
        padding: 0 1rem 0 1.7rem;
        outline: none;
        font-family: monospace;
    }
`;
