import styled from "styled-components";

export default styled.div`
    height: 1.6rem;
    background-image: -webkit-linear-gradient(top, rgb(237, 237, 237) 0px, rgb(237, 237, 237) 1px, rgb(231, 231, 231) 2px, rgb(209, 209, 209) 100%);
    border-top: 1px solid #c2c0c2;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        height: 1px;
        left: 0;
        right: 0;
        top: 0;
        background-color: #f5f5f4;
    }
`;
