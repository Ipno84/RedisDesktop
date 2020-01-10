export default function generateRandomInt(min, max) {
    const min = Math.ceil(min);
    const max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
