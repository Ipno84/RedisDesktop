import ClientFormContainer from "./ClientFormContainer";
import React from "react";
import Styled from "./styled";
import Tabs from "./Tabs";
import TabsContainer from "./TabsContainer";
import getActiveConnectedClientIndexSelector from "../../../../state/selectors/getActiveConnectedClientIndexSelector";
import hasActiveTabsSelector from "../../../../state/selectors/hasActiveTabsSelector";
import { useSelector } from "react-redux";

const Main = () => {
    const hasActiveTabs = useSelector(state => hasActiveTabsSelector(state));
    const activeConnectedClientIndex = useSelector(state => getActiveConnectedClientIndexSelector(state));
    return (
        <Styled>
            {hasActiveTabs && <Tabs />}
            {activeConnectedClientIndex === -1 ? <ClientFormContainer /> : <TabsContainer />}
        </Styled>
    );
};

export default Main;
