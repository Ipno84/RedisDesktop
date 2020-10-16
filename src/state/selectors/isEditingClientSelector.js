import { createSelector } from "reselect";
import getEditingClientIndexSelector from "./getEditingClientIndexSelector";

export default createSelector(getEditingClientIndexSelector, editingClientIndex => editingClientIndex !== -1);
