import { createSelector } from "reselect";
import getActiveConnectedClientKeyEditedValueSelector from "./getActiveConnectedClientKeyEditedValueSelector";

export default createSelector(getActiveConnectedClientKeyEditedValueSelector, editedValue => Boolean(editedValue && editedValue.length));
