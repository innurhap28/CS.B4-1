export function isEmpty(value) {
    return value.trim() === "";
}

export function isValidEmail(email) {
    return /^[^\s@]+@[^/s@]+\.[^\s@]+$/.test(email);
}