import { initNavbar } from "./components/navbar.js";
import { initDarkMode } from "./components/darkmode.js";
import { initProjects } from "./components/projects.js";
import { initContact } from "./components/contact.js";
import { initScroll } from "./components/scroll.js";
import { initTyping } from "./components/typing.js";
import { scrollTop } from "./components/scroll.js";

initNavbar();
initDarkMode();
initProjects();
initContact();
initScroll();
initTyping();
scrollTop();


// 엥? 한 번 이걸 넣어봤더니 스크롤 복귀가 문제없이 된다?!
const restoreHistory = () => {
    setTimeout(() => {
    }, 0);
}