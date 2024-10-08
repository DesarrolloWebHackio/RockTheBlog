import "./StudiesCard.css";

export const StudiesCard = (study) => {
  const article = document.createElement("article");
  article.classList.add("studiesCard", "contrast");

  article.innerHTML = `
        <div class="contrast info">
            <div class="img_wrp">
                <img src="${study.schoolImg}" alt="${study.school}"/>
            </div>
            <div class="contrast info_detail">
                <h3 class="contrast">${study.school}</h3>
                <p class="contrast">${study.title}</p>
            </div>
        </div>
        <p class="contrast description">${study.description}</p>
        <div class="contrast technologies">
            ${study.technologies.map(
              (tech) => `<img src="${tech.icon}" alt="${tech.name}" class="contrast"/>`
            ).join("")}
        </div>
    `;

  return article;
};
