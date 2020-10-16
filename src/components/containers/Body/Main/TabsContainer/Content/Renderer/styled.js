import styled, { css } from "styled-components";

export default styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    overflow: auto;
    /* word-break: break-all; */
    user-select: auto !important;
    /* scroll-behavior: smooth; */
    border-radius: 5px;
    /* transition: all 0.15s ease; */
    * {
        user-select: auto !important;
        cursor: text;
        box-sizing: border-box;
        &::selection {
            background-color: #015cff !important;
            color: #fff !important;
        }
    }
    pre {
        margin: 0;
        padding-bottom: 1.2rem;
        user-select: auto;
        /* height: 100%; */
        display: block;
        height: auto;
        code {
            outline: none;
            display: block;
        }
    }
    .hidden {
        visibility: hidden;
    }
    .searched {
        background-color: #015cff !important;
    }
    /* code {
        transition: color 0.15s ease;
    } */
    ${props =>
        props.isEditing
            ? css`
                  background-color: #fff !important;
                  box-shadow: 0 0px 14px #333;
                  code {
                      color: #000 !important;
                  }
              `
            : css`
                  background-color: #000 !important;
                  box-shadow: 0 0px 0 #015cff;
                  code {
                      color: #fff !important;
                  }
              `}
`;
