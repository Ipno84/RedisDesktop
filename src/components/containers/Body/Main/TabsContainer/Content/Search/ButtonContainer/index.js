import { IconCaretDown, IconCaretUp } from "./Icon";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";
import Indicator from "./Indicator";
import Styled from "./styled";
import { Text } from "react-desktop/macOs";
import getSearchResultsCountSelector from "../../../../../../../../state/selectors/getSearchResultsCountSelector";
import getSearchSelectedItemIndexSelector from "../../../../../../../../state/selectors/getSearchSelectedItemIndexSelector";
import isSearchKeywordFilledSelector from "../../../../../../../../state/selectors/isSearchKeywordFilledSelector";
import setSearchSelectedItemIndexAction from "../../../../../../../../state/actions/setSearchSelectedItemIndexAction";

const ButtonContainer = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => getSearchResultsCountSelector(state));
    const searchSelectedItemIndex = useSelector(state => getSearchSelectedItemIndexSelector(state));
    const isSearchKeywordFilled = useSelector(state => isSearchKeywordFilledSelector(state));
    const searchResultsCount = useSelector(state => getSearchResultsCountSelector(state));
    const setSearchSelectedItemIndex = useCallback(index => dispatch(setSearchSelectedItemIndexAction(index)), [dispatch]);

    const onNext = () => {
        const nextIndex = searchSelectedItemIndex + 1;
        setSearchSelectedItemIndex(nextIndex === searchResultsCount ? 0 : nextIndex);
    };
    const onPrev = () => {
        const prevIndex = searchSelectedItemIndex - 1;
        setSearchSelectedItemIndex(prevIndex === -1 ? searchResultsCount - 1 : prevIndex);
    };

    if (!isSearchKeywordFilled) return null;
    return (
        <Styled>
            <Button type="button" onClick={onNext}>
                <IconCaretDown size={16} />
            </Button>
            <Button type="button" onClick={onPrev}>
                <IconCaretUp size={16} />
            </Button>
            <Indicator>
                <Text>
                    {searchSelectedItemIndex + 1}/{count}
                </Text>
            </Indicator>
        </Styled>
    );
};

export default ButtonContainer;
