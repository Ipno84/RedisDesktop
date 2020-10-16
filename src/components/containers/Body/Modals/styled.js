import styled, { css } from "styled-components";

export default styled.div`
    position: absolute;
    background-color: #f3f3f3;
    box-shadow: 0 0 1rem #999;
    left: 50%;
    z-index: 99999;
    border-radius: 0 0 0.2rem 0.2rem;
    transition: transform 0.3s ease;
    ${props =>
        props.isOpen
            ? css`
                  transform: translateX(-50%) translateY(0);
              `
            : css`
                  transform: translateX(-50%) translateY(-100%);
              `}
`;
