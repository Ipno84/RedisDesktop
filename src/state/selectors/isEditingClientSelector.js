import { createSelector } from "reselect";
import getEditingClientIndexSelector from "./getEditingClientIndexSelector";

export default createSelector(getEditingClientIndexSelector, editingClientIndex => {
    return editingClientIndex !== -1;
});
