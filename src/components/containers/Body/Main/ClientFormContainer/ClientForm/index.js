import { Button, Label, TextInput } from "react-desktop/macOs";

import Container from "./Container";
import Field from "./Field";
import Footer from "./Footer";
import Left from "./Left";
import React from "react";
import Right from "./Right";
import Styled from "./styled";

const ClientForm = () => {
    return (
        <Styled>
            <Container>
                <Field>
                    <Left>
                        <Label>Nome</Label>
                    </Left>
                    <Right>
                        <TextInput defaultValue="" onChange={e => console.log(e)} />
                    </Right>
                </Field>
                <Field>
                    <Left>
                        <Label>Host</Label>
                    </Left>
                    <Right>
                        <TextInput defaultValue="" onChange={e => console.log(e)} />
                    </Right>
                </Field>
                <Field>
                    <Left>
                        <Label>Port</Label>
                    </Left>
                    <Right>
                        <TextInput defaultValue="" onChange={e => console.log(e)} />
                    </Right>
                </Field>
                <Field>
                    <Left>
                        <Label>Password</Label>
                    </Left>
                    <Right>
                        <TextInput defaultValue="" onChange={e => console.log(e)} />
                    </Right>
                </Field>
            </Container>
            <Footer>
                <Left inverted={true}>
                    <Button color="white" onClick={() => console.log("Clicked!")}>
                        Aggiungi ai preferiti
                    </Button>
                </Left>
                <Right inverted={true}>
                    <Button color="blue" onClick={() => console.log("Clicked!")}>
                        Connetti
                    </Button>
                </Right>
            </Footer>
        </Styled>
    );
};

export default ClientForm;
