module.exports = function capitalizeFirstLetter(string) {
    if (string.length === 0) {
        return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}