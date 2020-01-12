import { createSelector } from "reselect";
import getFormDataErrorsSelector from "./getFormDataErrorsSelector";

export default createSelector(
    getFormDataErrorsSelector,
    (_, item) => item,
    (formErrors, item) => formErrors.includes(item)
);
