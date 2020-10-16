import styled, { css } from "styled-components";

export default styled.div`
    position: absolute;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: bottom 0.3s ease, opacity 0.3s ease;
    ${props =>
        props.visible
            ? css`
                  bottom: 0;
                  opacity: 1;
                  pointer-events: auto;
              `
            : css`
                  bottom: -4rem;
                  opacity: 0;
                  pointer-events: none;
              `}
`;
