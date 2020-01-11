import { persistor, store } from "./state/store";

import Body from "./components/containers/Body";
import GlobalStyle from "./components/containers/GlobalStyle";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import React from "react";
import Setup from "./components/containers/Setup";
import { ThemeProvider } from "styled-components";
import theme from "./constants/ThemeConstants";

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <Setup />
                    <GlobalStyle />
                    <Body />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
