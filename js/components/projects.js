import { fetchRepositories } from "../api.js";
import { createProjectCard } from "../ui.js";

export async function initProjects() {
    const projectList = document.querySelector("#project-list");
    const repositories = await fetchRepositories("innurhap28");
    projectList.innerHTML = repositories.map(createProjectCard).join("");
}