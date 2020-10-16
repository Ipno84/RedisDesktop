import styled, { css } from "styled-components";

export default styled.div`
    position: relative;
    ${props =>
        props.inverted
            ? css`
                  display: flex;
                  flex: 1;
                  justify-content: flex-end;
              `
            : css`
                  flex: 6;
                  justify-content: flex-start;
                  padding: 0 0.5rem;
                  disply: inline-block;
              `}
`;
