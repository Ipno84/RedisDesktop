import { SET_OBSERVER } from "./../../../constants/ListConstants";

export default function setObserverAction(observer) {
    return {
        type: SET_OBSERVER,
        observer
    };
}
