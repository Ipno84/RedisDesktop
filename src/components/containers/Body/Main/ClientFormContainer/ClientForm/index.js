import { Button, Label } from "react-desktop/macOs";
import React, { useCallback } from "react";

import Container from "./Container";
import Field from "./Field";
import Footer from "./Footer";
import Input from "./Input";
import InputLabel from "./InputLabel";
import Left from "./Left";
import Right from "./Right";
import Styled from "./styled";
import addRedisClientAction from "./../../../../../../state/actions/addRedisClientAction";
import { useDispatch } from "react-redux";

const fields = [
    { label: "Nome", inputKey: "name" },
    { label: "Host", inputKey: "host" },
    { label: "Port", inputKey: "port" },
    { label: "Password", inputKey: "password", password: true }
];

const ClientForm = () => {
    const dispatch = useDispatch();
    const addToFavorite = useCallback(() => dispatch(addRedisClientAction()), [dispatch]);
    return (
        <Styled
            onSubmit={e => {
                e.preventDefault();
                console.log("Connetti!");
            }}
        >
            <Container>
                {fields.map(field => (
                    <Field key={field.label}>
                        <Left>
                            <InputLabel inputKey={field.inputKey}>{field.label}</InputLabel>
                        </Left>
                        <Right>
                            <Input inputKey={field.inputKey} password={field.password} />
                        </Right>
                    </Field>
                ))}
            </Container>
            <Footer>
                <Left inverted={true}>
                    <Button type="button" color="white" onClick={() => addToFavorite()}>
                        Aggiungi ai preferiti
                    </Button>
                </Left>
                <Right inverted={true}>
                    <Button type="submit" color="blue">
                        Connetti
                    </Button>
                </Right>
            </Footer>
        </Styled>
    );
};

export default ClientForm;
