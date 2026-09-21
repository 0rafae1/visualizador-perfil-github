import { getGithubUser } from "./github-api.js";
import {
  clearResults,
  renderProfile,
  showLoading,
} from "./profile-renderer.js";

const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");

btnSearch.addEventListener("click", async () => {
  const userName = inputSearch.value.trim();

  if (userName) {
    showLoading(profileResults);

    try {
      const userData = await getGithubUser(userName);
      renderProfile(profileResults, userData);
    } catch (error) {
      console.error("Erro ao buscar o perfil do usuário:", error);
      const message =
        error.message === "Usuário não encontrado"
          ? "Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente."
          : "Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.";

      alert(message);
      clearResults(profileResults);
    }
  } else {
    alert("Por favor, digite um nome de usuário do GitHub.");
    clearResults(profileResults);
  }
});
