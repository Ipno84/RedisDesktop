import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonContainer from "./ButtonContainer";
import Input from "./Input";
import Styled from "./styled";
import getDomElementsSelector from "./../../../../../../../state/selectors/ListSelectors/getDomElementsSelector";
import getSearchResultsSelector from "./../../../../../../../state/selectors/getSearchResultsSelector";
import getSearchSelectedItemIndexSelector from "./../../../../../../../state/selectors/getSearchSelectedItemIndexSelector";
import isSearchActiveSelector from "./../../../../../../../state/selectors/isSearchActiveSelector";
import setSearchVisibilityAction from "./../../../../../../../state/actions/setSearchVisibilityAction";
import { useHotkeys } from "react-hotkeys-hook";

const Search = () => {
    const dispatch = useDispatch();

    const isSearchActive = useSelector(state => isSearchActiveSelector(state));
    const setSearchVisibility = useCallback(visibility => dispatch(setSearchVisibilityAction(visibility)), [dispatch]);

    const searchResults = useSelector(state => getSearchResultsSelector(state));

    const searchSelectedItemIndex = useSelector(state => getSearchSelectedItemIndexSelector(state));
    const domElements = useSelector(state => getDomElementsSelector(state));

    const searchWrapper = useRef(null);

    const command = process.platform === "darwin" ? "cmd+f" : "ctrl+f";
    const onEscKey = useCallback(
        e => {
            if (isSearchActive && e.key === "Escape") {
                const input = searchWrapper.current.querySelector("input");
                if (input) {
                    input.blur();
                    setSearchVisibility(false);
                }
            }
        },
        [setSearchVisibility, isSearchActive]
    );

    useHotkeys(command, () => setSearchVisibility(!isSearchActive));

    useEffect(() => {
        document.addEventListener("keyup", onEscKey, false);
        return () => {
            document.removeEventListener("keyup", onEscKey, false);
        };
    }, [onEscKey]);

    useEffect(() => {
        if (searchSelectedItemIndex !== -1) {
            const searchIndex = searchResults[searchSelectedItemIndex];
            if (searchIndex) {
                const element = domElements[searchIndex];
                if (element) {
                    const scroller = searchWrapper.current.previousElementSibling;
                    scroller.scrollTop = element.offsetTop - scroller.offsetTop;
                    scroller.scrollLeft = element.offsetLeft - scroller.offsetLeft;
                }
            }
        }
    }, [searchSelectedItemIndex, domElements, searchResults]);

    useEffect(() => {
        if (isSearchActive) {
            const input = searchWrapper.current.querySelector("input");
            if (input) input.focus();
        }
    }, [isSearchActive]);

    return (
        <Styled ref={searchWrapper} visible={isSearchActive}>
            <Input />
            <ButtonContainer />
        </Styled>
    );
};

export default Search;
