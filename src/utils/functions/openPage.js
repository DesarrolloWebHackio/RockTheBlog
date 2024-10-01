export const openPage = (id) => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  const sectionPage = document.createElement("section");
  sectionPage.id = id;
  app.append(sectionPage);
  const h2 = document.createElement("h2");
  h2.textContent = id.toUpperCase();
  sectionPage.append(h2);
  return sectionPage;
};