import { createSelector } from "reselect";
import getFormDataErrorsSelector from "./getFormDataErrorsSelector";

export default createSelector(
    getFormDataErrorsSelector,
    (_, item) => item,
    (formKeyErrors, item) => {
        return formKeyErrors[item] ? formKeyErrors[item] : null;
    }
);
