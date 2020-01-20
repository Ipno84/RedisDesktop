import styled, { css } from "styled-components";

export default styled.div`
    padding: 0.219rem 0.6rem;
    font-size: 0.9rem;
    border-style: solid;
    border-width: 1px;
    border-color: transparent;
    border-right: none;
    border-left: none;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${props =>
        props.isActive &&
        css`
            background: -webkit-linear-gradient(top, rgba(90, 178, 246) 0%, rgb(0, 130, 250) 100%);
            border-color: rgb(48, 160, 245) rgb(0, 128, 247) rgb(0, 96, 250);
            color: #fff;
        `}
`;
