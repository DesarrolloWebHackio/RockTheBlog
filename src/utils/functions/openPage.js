export const openPage = (id) => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  const divPage = document.createElement("div");
  divPage.id = id;
  app.append(divPage);
  const h2 = document.createElement("h2");
  h2.textContent = id.toUpperCase();
  divPage.append(h2);
  return divPage;
};