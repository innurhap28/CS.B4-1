import { saveTheme, loadTheme } from "../storage.js";

export function initDarkMode() {
    const themeToggle = document.querySelector("#theme-toggle");
    const savedTheme = loadTheme();
    if (savedTheme) {
        document.documentElement.dataset.theme = savedTheme;
    } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDark) {document.documentElement.dataset.theme = "dark"};
    }
    
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.dataset.theme;
        if (currentTheme === "dark") {
            document.documentElement.dataset.theme = "light";
            saveTheme("light");
        } else {
            document.documentElement.dataset.theme = "dark";
            saveTheme("dark");
        }
    });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
        if (localStorage.getItem("theme")) return;
        document.documentElement.dataset.theme = e.matches ? "dark" : "light";
    })
}