import styled from "styled-components";

export default styled.div`
    width: 100%;
    height: 13rem;
    box-sizing: border-box;
    padding: 0 1rem;
    & > * {
        box-sizing: border-box;
    }
    & > div {
        height: 100%;
        box-sizing: border-box;
        background-color: #000;
    }
`;
