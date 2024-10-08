export const openPage = (id, text) => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  const sectionPage = document.createElement("section");
  sectionPage.id = id;
  app.append(sectionPage);
  if (text) {
    const h2 = document.createElement("h2");
    h2.textContent = text.toUpperCase();
    sectionPage.append(h2);
  }
  return sectionPage;
};