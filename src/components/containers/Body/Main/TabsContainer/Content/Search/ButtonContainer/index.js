import { CaretDown } from "styled-icons/boxicons-regular/CaretDown";
import { CaretUp } from "styled-icons/boxicons-regular/CaretUp";
import React from "react";
import Styled from "./styled";
import { Text } from "react-desktop/macOs";
import styled from "styled-components";

const style = `color: #333;`;
const IconCaretDown = styled(CaretDown)`
    ${style}
`;
const IconCaretUp = styled(CaretUp)`
    ${style}
`;
const Indicator = styled.div`
    width: 2rem;
`;

const Button = styled.button`
    margin: 0;
    padding: 0;
    border: none;
    height: 1.4rem;
    width: 1.3rem;
    outline: 0;
    &:last-child {
        margin-right: 0.75rem;
    }
`;

const ButtonContainer = ({ index, count, onNext, onPrev }) => {
    return (
        <Styled>
            <Button type="button" onClick={onNext}>
                <IconCaretDown size={16} />
            </Button>
            <Button type="button" onClick={onPrev}>
                <IconCaretUp size={16} />
            </Button>
            <Indicator>
                <Text>
                    {index + 1}/{count}
                </Text>
            </Indicator>
        </Styled>
    );
};

export default ButtonContainer;
