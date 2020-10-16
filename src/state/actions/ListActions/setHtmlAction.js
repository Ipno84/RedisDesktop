import { SET_HTML } from "./../../../constants/ListConstants";

export default function setHtmlAction(html) {
    return {
        type: SET_HTML,
        html
    };
}
