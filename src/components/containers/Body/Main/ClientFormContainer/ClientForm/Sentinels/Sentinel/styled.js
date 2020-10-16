import styled, { css } from "styled-components";

export default styled.div`
    .inner {
        padding: 0.7rem 1rem;
    }
    > div {
        ${props =>
            props.bordered
                ? css`
                      border-width: 1px;
                      border-color: #c2c2c2 !important;
                  `
                : css`
                      border-width: 0 !important;
                  `}
    }
`;
