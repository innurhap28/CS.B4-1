export async function fetchRepositories(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
        throw new Error("GitHub API 호출 실패");
    }
    return await response.json();
}