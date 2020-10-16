import styled, { css } from "styled-components";

export default styled.div`
    align-items: center;
    display: flex;
    padding-bottom: 0.1rem;
    ${props =>
        props.inverted
            ? css`
                  flex: 1;
                  justify-content: flex-start;
              `
            : css`
                  flex: 4;
                  justify-content: flex-end;
                  padding: 0 0.5rem;
              `}
`;
