export function createProjectCard(repo) {
    return `
        <article class="project-card">
            <h3>${repo.name}</h3>
            <p>${repo.description ?? "설명이 없습니다."}</p>
            <a
                href="${repo.html_url}"
                target="_blank"
            >
                GitHub 보기
            </a>
        </article>
    `;
}