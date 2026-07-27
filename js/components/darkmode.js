import { saveTheme, loadTheme } from "../storage.js";

export function initDarkMode() {
    const themeToggle = document.querySelector("#theme-toggle");
    const savedTheme = loadTheme();
    if (savedTheme) {
        document.body.dataset.theme = savedTheme;
    }
    
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.body.dataset.theme;
        if (currentTheme === "dark") {
            document.body.dataset.theme = "light";
            // document.body.removeAttribute("data-theme");
            // 위의 코드로 교체, ligth 모드 시 저장하지 않고 속성을 삭제하는 방식
            saveTheme("light");
        } else {
            document.body.dataset.theme = "dark";
            saveTheme("dark");
        }
    });
}