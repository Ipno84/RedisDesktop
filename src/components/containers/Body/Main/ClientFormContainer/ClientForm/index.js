import { Button, Link } from "react-desktop/macOs";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "./Container";
import { Eye } from "styled-icons/icomoon/Eye";
import { EyeBlocked } from "styled-icons/icomoon/EyeBlocked";
import Field from "./Field";
import Footer from "./Footer";
import Input from "./Input";
import InputLabel from "./InputLabel";
import Left from "./Left";
import Right from "./Right";
import Sentinels from "./Sentinels";
import Styled from "./styled";
import addRedisClientAction from "./../../../../../../state/actions/addRedisClientAction";
import addSentinelAction from "../../../../../../state/actions/addSentinelAction";
import connectRedisClientAction from "./../../../../../../state/actions/connectRedisClientAction";
import editRedisClientAction from "../../../../../../state/actions/editRedisClientAction";
import isEditingClientSelector from "../../../../../../state/selectors/isEditingClientSelector";
import saveRedisClientAction from "../../../../../../state/actions/saveRedisClientAction";
import styled from "styled-components";

const style = `
    color: #999;
    padding: 0 0.4rem 0.2rem 0.4rem;`;

const IconEye = styled(Eye)`
    ${style}
`;
const IconEyeBlocked = styled(EyeBlocked)`
    ${style}
`;

const fields = [
    { label: "Nome", inputKey: "name", required: true },
    { label: "Master", inputKey: "master", required: false },
    { label: "Password", inputKey: "password", password: true }
    // { label: "Host", inputKey: "host", required: true },
    // { label: "Port", inputKey: "port" }
];

const ClientForm = () => {
    const isEditing = useSelector(state => isEditingClientSelector(state));
    const [showPassword, toggleShowPassword] = useState(false);
    const dispatch = useDispatch();
    const addToFavorite = useCallback(() => dispatch(addRedisClientAction()), [dispatch]);
    const connect = useCallback(() => dispatch(connectRedisClientAction(true)), [dispatch]);
    const editRedisClient = useCallback(() => dispatch(editRedisClientAction(-1)), [dispatch]);
    const saveRedisClient = useCallback(() => dispatch(saveRedisClientAction()), [dispatch]);
    const addSentinel = useCallback(() => dispatch(addSentinelAction()), [dispatch]);
    return (
        <Styled
            onSubmit={e => {
                e.preventDefault();
                if (isEditing) {
                    saveRedisClient();
                } else {
                    connect();
                }
            }}
        >
            <Container>
                {fields.map(field => (
                    <Field key={field.label}>
                        <Left>
                            <InputLabel inputKey={field.inputKey} required={field.required}>
                                {field.label}
                            </InputLabel>
                        </Left>
                        <Right>
                            <Input inputKey={field.inputKey} password={field.password && !showPassword} />
                            {field.password && (
                                <button
                                    type="button"
                                    style={{
                                        position: "absolute",
                                        right: "0.4rem",
                                        top: "0.2rem",
                                        zIndex: 3,
                                        margin: 0,
                                        padding: 0,
                                        background: "none",
                                        border: "none",
                                        outline: "none"
                                    }}
                                    onClick={() => toggleShowPassword(!showPassword)}
                                >
                                    {showPassword ? <IconEye size={16} /> : <IconEyeBlocked size={16} />}
                                </button>
                            )}
                        </Right>
                    </Field>
                ))}
                <Sentinels />
                <Field>
                    <Left></Left>
                    <Right>
                        <Link onClick={addSentinel}>Aggiungi host</Link>
                    </Right>
                </Field>
            </Container>
            <Footer>
                <Left inverted={true}>
                    <Button
                        type="button"
                        color="white"
                        onClick={() => {
                            if (isEditing) {
                                editRedisClient();
                            } else {
                                addToFavorite();
                            }
                        }}
                    >
                        {isEditing ? "Annulla" : "Aggiungi ai preferiti"}
                    </Button>
                </Left>
                <Right inverted={true}>
                    <Button type="submit" color="blue">
                        {isEditing ? "Salva" : "Connetti"}
                    </Button>
                </Right>
            </Footer>
        </Styled>
    );
};

export default ClientForm;
