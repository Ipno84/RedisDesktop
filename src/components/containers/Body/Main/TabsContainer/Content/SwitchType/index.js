import React, { useCallback } from "react";
import { SegmentedControl, SegmentedControlItem } from "react-desktop/macOs";
import { useDispatch, useSelector } from "react-redux";

import Styled from "./styled";
import getActiveConnectedClientParserSelector from "../../../../../../../state/selectors/getActiveConnectedClientParserSelector";
import setParserTypeAction from "../../../../../../../state/actions/setParserTypeAction";

const options = [
    { label: "Full Text", type: "" },
    { label: "Dump", type: "php" },
    { label: "JSON", type: "javascript" }
];

const SwitchType = () => {
    const dispatch = useDispatch();
    const setParserType = useCallback(parser => dispatch(setParserTypeAction(parser)), [dispatch]);
    const parser = useSelector(state => getActiveConnectedClientParserSelector(state));
    return (
        <Styled>
            <SegmentedControl>
                {options.map((option, i) => (
                    <SegmentedControlItem key={option} selected={option.type === parser} title={option.label} onSelect={() => setParserType(option.type)} />
                ))}
            </SegmentedControl>
        </Styled>
    );
};

export default SwitchType;
