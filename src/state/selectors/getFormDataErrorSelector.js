import { createSelector } from "reselect";
import getFormDataErrorsSelector from "./getFormDataErrorsSelector";

export default createSelector(
    getFormDataErrorsSelector,
    (_, item) => item,
    (_, item, index) => index,
    (formKeyErrors, item, index) => {
        if (index !== undefined)
            return formKeyErrors && formKeyErrors.sentinels && formKeyErrors.sentinels[index] && Object.keys(formKeyErrors.sentinels[index]).includes(item);
        return Object.keys(formKeyErrors).includes(item);
    }
);
