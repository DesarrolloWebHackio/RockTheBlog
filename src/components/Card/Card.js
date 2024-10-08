import "./Card.css";

export const Card = (element) => {
  const article = document.createElement("article");
  article.classList.add("studiesCard", "contrast");

  article.innerHTML = `
        <div class="contrast info">
            <div class="img_wrp">
                <img src="${element.img}" alt="${element.entity}"/>
            </div>
            <div class="contrast info_detail">
                <h3 class="contrast">${element.entity}</h3>
                <p class="contrast">${element.title}</p>
            </div>
        </div>
        <p class="contrast description">${element.description}</p>
        <div class="contrast technologies">
            ${element.technologies.map(
              (tech) => `<img src="${tech.icon}" alt="${tech.name}" class="contrast"/>`
            ).join("")}
        </div>
    `;

  return article;
};
