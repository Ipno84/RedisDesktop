import { SegmentedControl, SegmentedControlItem, Text } from "react-desktop/macOs";

import React from "react";
import Styled from "./styled";
import { useSelector } from "react-redux";

const options = ["Full Text", "Dump", "JSON"];

const SwitchType = () => {
    return (
        <Styled>
            <SegmentedControl>
                {options.map((option, i) => (
                    <SegmentedControlItem key={option} title={option} onSelect={() => console.log(option, i)} />
                ))}
            </SegmentedControl>
        </Styled>
    );
};

export default SwitchType;
