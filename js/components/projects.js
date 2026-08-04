import { fetchRepositories } from "../api.js";
import { createProjectCard } from "../ui.js";

// export async function initProjects() {
//     const projectList = document.querySelector("#project-list");
//     const repositories = await fetchRepositories("innurhap28");
//     projectList.innerHTML = repositories.map(createProjectCard).join("");
// }

export async function initProjects() {
    const projectList = document.querySelector("#project-list");
    projectList.innerHTML = `
        <div id ="project-list-load">
            <span id=loading><i class="fa-solid fa-arrows-rotate"></i><span>
            <p>Loading...</p>
        </div>`;
    try {
        const repositories = await fetchRepositories("innurhap28");

        if (repositories.length === 0) {
            projectList.innerHTML = `
                <div id="project-list-load">
                    <p>표시할 프로젝트가 없습니다.</p>
                </div>`;
            return;
        }

        projectList.innerHTML = repositories.map(createProjectCard).join("");
    } catch (error) {
        projectList.innerHTML = `
            <div id="project-list-load">
                <p>프로젝트를 불러올 수 없습니다.</p>
                <button id="retry" class="btn">
                    <span class="text">다시 시도<span>
                </button>
            </div>
        `;
        document
            .querySelector("#retry")
            .addEventListener("click", initProjects);
    }
}