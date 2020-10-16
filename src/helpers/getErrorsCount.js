export default function getErrorsCount(errors) {
    let { sentinels, ...others } = errors;
    return Object.keys(others).length + sentinels.map(item => Object.keys(item).length).reduce((a, b) => a + b);
}
