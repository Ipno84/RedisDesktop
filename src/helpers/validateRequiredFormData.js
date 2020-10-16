export default function validateRequiredFormData(data, required, fields) {
    let missingRequiredData = {};
    for (let key in data) {
        if (required.includes(key) && data[key] !== 0 && !data[key]) {
            const message = `${fields[required.indexOf(key)]} è un campo obbligatorio`;
            missingRequiredData = {
                ...missingRequiredData,
                [key]: missingRequiredData[key] ? [...missingRequiredData[key], message] : [message]
            };
        }
    }
    return missingRequiredData;
}
