import { SET_DOM_ELEMENTS } from "./../../../constants/ListConstants";

export default function setDomElementsAction(domElements) {
    return {
        type: SET_DOM_ELEMENTS,
        domElements
    };
}
