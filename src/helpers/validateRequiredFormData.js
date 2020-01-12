export default function validateRequiredFormData(data, required) {
    let missingRequiredData = [];
    for (let key in data) {
        if (required.includes(key) && data[key] !== 0 && !data[key]) {
            missingRequiredData.push(key);
        }
    }
    return missingRequiredData;
}
