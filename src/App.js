import { persistor, store } from "./state/store";

import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import React from "react";
import Setup from "./components/containers/Setup";

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Setup />
            </PersistGate>
        </Provider>
    );
}

export default App;
