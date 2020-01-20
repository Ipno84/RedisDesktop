import React, { useEffect, useRef, useState } from "react";

import ButtonContainer from "./ButtonContainer";
import Styled from "./styled";
import { TextInput } from "react-desktop/macOs";

const Search = () => {
    const searchWrapper = useRef(null);
    const [searchText, setSearchText] = useState("");
    const [foundCollectionItems, setFoundCollectionItems] = useState([]);
    const [currentSelectedItemIndex, setCurrentSelectedItemIndex] = useState(-1);

    const setSelection = element => {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(element);
        range.setEnd(element, 1);
        selection.removeAllRanges();
        selection.addRange(range);
    };

    const onChange = e => setSearchText(e.target.value);
    const onNext = () => {
        const nextIndex = currentSelectedItemIndex + 1;
        setCurrentSelectedItemIndex(nextIndex === foundCollectionItems.length ? 0 : nextIndex);
    };
    const onPrev = () => {
        const prevIndex = currentSelectedItemIndex - 1;
        setCurrentSelectedItemIndex(prevIndex === -1 ? foundCollectionItems.length - 1 : prevIndex);
    };
    useEffect(() => {
        if (searchText) {
            const root = document.querySelector("[class*='language-']");
            if (root) {
                const res = [...root.children].filter(item => item.textContent.indexOf(searchText) > -1);
                setFoundCollectionItems(res);
                setCurrentSelectedItemIndex(0);
            }
        } else if (foundCollectionItems.length !== 0) {
            setFoundCollectionItems([]);
            setCurrentSelectedItemIndex(-1);
        }
    }, [searchText, foundCollectionItems.length]);
    useEffect(() => {
        if (currentSelectedItemIndex !== -1) {
            const element = foundCollectionItems[currentSelectedItemIndex];
            if (element) {
                const scroller = searchWrapper.current.previousElementSibling;
                scroller.scrollTop = element.offsetTop - scroller.offsetTop;
                scroller.scrollLeft = element.offsetLeft - scroller.offsetLeft;
                setSelection(element);
            }
        }
    }, [currentSelectedItemIndex, foundCollectionItems]);
    return (
        <Styled ref={searchWrapper}>
            <TextInput width={300} rounded={true} placeholder="Cerca..." type="search" value={searchText} onChange={onChange} />
            {searchText && <ButtonContainer onNext={onNext} onPrev={onPrev} index={currentSelectedItemIndex} count={foundCollectionItems.length} />}
        </Styled>
    );
};

export default Search;
