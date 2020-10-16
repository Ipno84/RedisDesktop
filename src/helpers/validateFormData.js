export default function validateRequiredFormData(data) {
    let validator = {};
    if (data.name.length === 0) {
        const message = "Devi specificare un nome";
        if (!validator.name) validator.name = [];
        validator.name.push(message);
    }
    if (data.sentinels.length > 1 && data.master.length === 0) {
        const message = "Devi specificare il nome del master";
        if (!validator.master) validator.master = [];
        validator.master.push(message);
    }
    data.sentinels.forEach((sentinelData, i) => {
        if (!validator.sentinels) validator.sentinels = [];
        validator.sentinels.push({});
        if (sentinelData.host.length === 0) {
            const message = "Devi specificare un host";
            if (!validator.sentinels[i].host) validator.sentinels[i].host = [];
            validator.sentinels[i].host.push(message);
        }
    });
    return validator;
}
