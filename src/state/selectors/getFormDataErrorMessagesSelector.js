import { createSelector } from "reselect";
import getFormDataErrorsSelector from "./getFormDataErrorsSelector";

export default createSelector(
    getFormDataErrorsSelector,
    (_, item) => item,
    (_, item, index) => index,
    (formKeyErrors, item, index) => {
        if (index !== undefined) {
            return formKeyErrors.sentinels && formKeyErrors.sentinels[index] && formKeyErrors.sentinels[index][item]
                ? formKeyErrors.sentinels[index][item]
                : null;
        }
        return formKeyErrors[item] ? formKeyErrors[item] : null;
    }
);
