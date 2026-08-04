import { saveTheme, loadTheme } from "../storage.js";

export function initDarkMode() {
    const themeToggle = document.querySelector("#theme-toggle");
    const savedTheme = loadTheme();

    if (savedTheme) {
        document.documentElement.dataset.theme = savedTheme;
        updateThemeIcon(savedTheme);
    } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const theme = prefersDark ? "dark" : "light";
        document.documentElement.dataset.theme = theme;
        updateThemeIcon(theme);
    }
    
    function updateThemeIcon(currentTheme) {
        if (currentTheme === "dark") {
            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }

    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.dataset.theme;
        if (currentTheme === "dark") {
            document.documentElement.dataset.theme = "light";
            updateThemeIcon("light");
            saveTheme("light");
        } else {
            document.documentElement.dataset.theme = "dark";
            updateThemeIcon("dark");
            saveTheme("dark");
        }
    });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
        if (localStorage.getItem("theme")) return;
        const theme = e.matches ? "dark" : "light";
        document.documentElement.dataset.theme = theme;
        updateThemeIcon(theme);
    })
}