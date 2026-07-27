export function saveTheme(theme) {
    localStorage.setItem("theme", theme);
}

export function loadTheme() {
    return localStorage.getItem("theme");
}