import { AutoSizer, List } from "react-virtualized";

import Item from "./Item";
import React from "react";
import Styled from "./styled";
import getActiveConnectedClientKeysSelector from "../../../../../../../state/selectors/getActiveConnectedClientKeysSelector";
import { useSelector } from "react-redux";

const itemHeight = 25;

const Scroll = () => {
    const keys = useSelector(state => getActiveConnectedClientKeysSelector(state));
    return (
        <Styled>
            <AutoSizer>
                {({ width, height }) => (
                    <List
                        width={width}
                        height={height}
                        rowHeight={itemHeight}
                        rowRenderer={({ index, key, style }) => (
                            <Item style={style} key={keys[index]}>
                                {keys[index]}
                            </Item>
                        )}
                        rowCount={keys.length}
                        overscanRowCount={10}
                    />
                )}
            </AutoSizer>
        </Styled>
    );
};

export default Scroll;
