import { funcionHover } from "../../utils/animations/hoverCardProject";
import { projects } from "../../utils/data/projects";
import { openPage } from "../../utils/functions/openPage";
import "./Projects.css";

export const Projects = () => {
  const section = openPage("projects");

  for (const project of projects) {
    const div = document.createElement("div");

    div.innerHTML = `
        <a href="${project.deploy}">
            <img src="${project.img}" alt="${project.title}" title="Visita el proyecto"/>
        </a>
        <h3 class="contrast">${project.title}</h3>
        <p class="contrast">${project.description}</p>
        <a href="${project.code}">
            <img title="Visita el código" src="/assets/icons/github.png" alt="github"/>
        </a>
    `;

    div.classList.add("project", "contrast");
    section.append(div);
  }

  const style = document.createElement("style");
  style.classList.add("hover");

  section.append(style);

  const cards = document.querySelectorAll(".project");

  for (const card of cards) {
    card.addEventListener("mousemove", (e) => funcionHover(e, card));
    card.addEventListener("touchmove", (e) => funcionHover(e, card));
  }
};
