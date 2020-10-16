import styled, { css } from "styled-components";

export default styled.div`
    position: fixed;
    background-color: #000;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    transition: opacity 0.3s ease;
    ${props =>
        props.isOpen
            ? css`
                  opacity: 0.6;
                  pointer-events: auto;
              `
            : css`
                  opacity: 0;
                  pointer-events: none;
              `}
`;
