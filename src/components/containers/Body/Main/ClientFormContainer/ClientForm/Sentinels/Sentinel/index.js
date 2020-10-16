import { Box, Text } from "react-desktop/macOs";
import React, { useCallback } from "react";

import Field from "./../../Field";
import Input from "./../../Input";
import InputLabel from "./../../InputLabel";
import Left from "./../../Left";
import Right from "./../../Right";
import Styled from "./styled";
import removeSentinelAction from "../../../../../../../../state/actions/removeSentinelAction";
import { useDispatch } from "react-redux";

const fields = [
    { label: "Host", inputKey: "host", required: true },
    { label: "Port", inputKey: "port" }
];

const Sentinels = ({ index, count }) => {
    const dispatch = useDispatch();
    const removeSentinel = useCallback(index => dispatch(removeSentinelAction(index)), [dispatch]);
    return (
        <Styled bordered={count > 1}>
            <Box
                background={count > 1 ? "rgba(0, 0, 0, 0.04)" : "transparent"}
                margin={count > 1 ? "0.5rem 1rem 1rem 1rem" : "0rem 1rem"}
                padding={count > 1 ? "1rem" : "0rem 1rem"}
            >
                {count > 1 ? <Text>Sentinel {index + 1}</Text> : null}
                {index ? (
                    <button
                        style={{
                            position: "absolute",
                            right: "-0.6rem",
                            top: "-0.6rem",
                            margin: 0,
                            padding: 0,
                            backgroundColor: "#fff",
                            border: "1px solid #333",
                            width: "1.1rem",
                            height: "1.1rem",
                            lineHeight: "1rem",
                            fontSize: "0.8rem",
                            borderRadius: "100%",
                            outline: "none"
                        }}
                        type="button"
                        dangerouslySetInnerHTML={{ __html: "&times;" }}
                        onClick={() => removeSentinel(index)}
                    />
                ) : null}
                {fields.map(field => (
                    <Field className="inner" key={field.label}>
                        <Left>
                            <InputLabel inputKey={field.inputKey} required={field.required} index={index}>
                                {field.label}
                            </InputLabel>
                        </Left>
                        <Right>
                            <Input inputKey={field.inputKey} index={index} />
                        </Right>
                    </Field>
                ))}
            </Box>
        </Styled>
    );
};

export default Sentinels;
