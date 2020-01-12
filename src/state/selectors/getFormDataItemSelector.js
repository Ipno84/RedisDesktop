import { createSelector } from "reselect";
import getFormDataSelector from "./getFormDataSelector";

export default createSelector(
    getFormDataSelector,
    (_, item) => item,
    (formData, item) => {
        if (formData && formData[item]) {
            return formData[item];
        }
        return "";
    }
);
