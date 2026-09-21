const BASE_URL = "https://api.github.com";

export async function getGithubUser(userName) {
  const response = await fetch(
    `${BASE_URL}/users/${encodeURIComponent(userName)}`,
  );

  if (!response.ok) {
    throw new Error("Usuário não encontrado");
  }

  return response.json();
}