import styled, { css } from "styled-components";

export default styled.div`
    padding: 0.2rem 0.6rem;
    font-size: 0.9rem;
    ${props =>
        props.isActive &&
        css`
            background-color: #015cff;
            color: #fff;
        `}
`;
