import styled, { css } from "styled-components";

export default styled.li`
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
    ${props =>
        props.selected &&
        css`
            background-color: #dcdfe1;
        `}
`;
