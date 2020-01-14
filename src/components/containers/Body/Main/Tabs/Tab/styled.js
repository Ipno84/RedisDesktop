import styled, { css } from "styled-components";

export default styled.div`
    margin: 0;
    padding: 0 2rem;
    line-height: 1.5rem;
    font-size: 0.7rem;
    position: relative;
    border-right: 1px solid #c2c0c2;
    text-shadow: 1px 1px 0 #fff;
    &:before {
        content: "";
        position: absolute;
        width: 1px;
        right: -2px;
        bottom: 0;
        top: 0;
        background-color: #f5f5f4;
    }
    button {
        border: none;
        margin: 0;
        padding: 0;
        outline: 0;
        position: absolute;
        top: 45%;
        right: 0.8rem;
        transform: translateY(-50%);
        background-color: transparent;
        font-size: 0.9rem;
        display: none;
    }
    &:hover {
        button {
            display: inline-block;
        }
    }
    ${props =>
        props.active &&
        css`
            background-image: -webkit-linear-gradient(top, rgb(207, 207, 207) 0px, rgb(207, 207, 207) 1px, rgb(201, 201, 201) 2px, rgb(179, 179, 179) 100%);
        `}
`;
