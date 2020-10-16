import { SET_INDEXES } from "./../../../constants/ListConstants";

export default function setIndexesAction({ visible, notVisible }) {
    return {
        type: SET_INDEXES,
        visible,
        notVisible
    };
}
