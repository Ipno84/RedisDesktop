import styled, { css } from "styled-components";

export default styled.li`
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
    transition: padding 0.3s ease;
    ${props =>
        props.selected &&
        css`
            background-color: #dcdfe1;
        `}
    ${props =>
        props.active &&
        css`
            padding-left: 2rem;
            position: relative;
            &:before {
                content: "";
                width: 0.4rem;
                height: 0.4rem;
                border-radius: 100%;
                background-color: green;
                position: absolute;
                left: 1rem;
                top: 0.7rem;
            }
        `}
`;
