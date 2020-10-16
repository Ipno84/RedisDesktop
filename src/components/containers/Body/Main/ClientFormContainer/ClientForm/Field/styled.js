import styled, { css } from "styled-components";

export default styled.div`
    display: flex;
    ${props =>
        props.reduced
            ? css`
                  padding: 0 3rem 0.7rem 3rem;
              `
            : css`
                  padding: 0.7rem 3rem;
              `}
`;
