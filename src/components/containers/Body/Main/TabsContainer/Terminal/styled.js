import styled, { css } from "styled-components";

import MaximizeButton from "./MaximizeButton/styled";

export default styled.div`
    width: 100%;
    height: 13.91rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-image: -webkit-linear-gradient(top, rgb(237, 237, 237) 0px, rgb(237, 237, 237) 1px, rgb(231, 231, 231) 2px, rgb(209, 209, 209) 100%);
    border-top: 1px solid #c2c0c2;
    padding: 1rem;
    position: relative;
    word-break: break-all;
    ${props =>
        props.fullscreen &&
        css`
            position: fixed;
            left: -1rem;
            width: calc(100vw + 2rem);
            height: 100vh;
            z-index: 3;
            padding: 0 1rem;
            ${MaximizeButton} {
                top: 0.5rem;
            }
        `}
    ${MaximizeButton} {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    &:hover {
        ${MaximizeButton} {
            opacity: 1;
        }
    }
`;
