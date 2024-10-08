import anime from "animejs";
import { MyInfo } from "../../components/MyInfo/MyInfo";
import { SoftSkills } from "../../components/SoftSkills/SoftSkills";
import { openPage } from "../../utils/functions/openPage";
import "./Home.css";
import { toggleTheme } from "../../components/ChangeTheme/ChangeTheme";

export let interval;

export const Home = () => {
  const sectionPage = openPage("home");

  sectionPage.innerHTML = `
        ${SoftSkills()}
        <div>
            <div class="img_wrp contrast">
                <img src="/assets/spiderman.webp" alt="este soy yo"/>
            </div>
            ${MyInfo()}
        </div>
        <aside></aside>
    `;

  const img = document.querySelector('img[src="/assets/spiderman.webp"]');

  img.addEventListener("click", destroy);
};

const destroy = () => {
  for (let i = 0; i < 100; i++) {
    const cubo = document.createElement("div");
    cubo.classList.add("cubo", "contrast");
    document.body.append(cubo);

    cubo.style.left = `${Math.random() * window.innerWidth - 50}px`;

    cubo.style.width = `${i * 2}px`;
    cubo.style.height = `${i * 2}px`;
  }

  anime({
    targets: ".cubo",
    top: `100%`,
    rotate: anime.stagger([-360, 360]),
    delay: anime.stagger(100),
    easing: "easeInOutQuad",
    complete: cuboEnorme,
  });
};

const cuboEnorme = () => {
  const cubo = document.createElement("div");
  cubo.classList.add("cuboEnorme", "contrast");
  document.body.append(cubo);

  anime({
    targets: ".cuboEnorme",
    top: 0,
    easing: "easeInOutQuad",
    complete: () => {
      toggleTheme();
      cubo.classList.remove("contrast");
      document.querySelectorAll(".cubo").forEach((cubo) => cubo.remove());
    },
  });

  const timeText = document.createElement("div");
  cubo.append(timeText);

  let time = 15;
  timeText.innerHTML = `<p>Contrátame, hay trenes que sólo pasan una vez en la vida, se te acaba el tiempo, aprovecha y copia el correo haciendo click, rápido!!!</p> <p class="contact_email">santiago.cabrera@thepower.education</p><span class="time">${time} s</span>`;

  const email = document.querySelector(".contact_email");

  email.addEventListener("click", () => {
    navigator.clipboard.writeText("santiago.cabrera@thepower.education");
    email.textContent = "Copiado!";
  });

  interval = setInterval(() => {
    time--;
    document.querySelector(".time").textContent = `${time} s`;

    if (time === 0) {
      window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
  }, 1000);
};
