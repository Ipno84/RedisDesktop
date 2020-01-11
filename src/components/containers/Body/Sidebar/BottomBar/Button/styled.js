import styled from "styled-components";

export default styled.button`
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 1.7rem;
    outline: none;
    position: relative;
    border-right: 1px solid #c2c0c2;
    &:before {
        content: "";
        position: absolute;
        width: 1px;
        right: -2px;
        bottom: 0;
        top: 0;
        background-color: #f5f5f4;
    }
`;
