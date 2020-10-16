import { createSelector } from "reselect";
import getFormDataSelector from "./getFormDataSelector";

export default createSelector(
    getFormDataSelector,
    (state, item) => item,
    (state, item, index) => index,
    (formData, item, index) => {
        if (formData && index !== undefined && formData.sentinels[index] && formData.sentinels[index][item]) return formData.sentinels[index][item];
        if (formData && index === undefined && formData[item]) return formData[item];
        return "";
    }
);
