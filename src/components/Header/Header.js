import anime from "animejs";
import { routes } from "../../utils/data/routes";
import "./Header.css";
import { navLinkAnimation } from "../../utils/animations/navLink";
import { changePreviousRoute } from "../../../main";
import { bubble } from "../../utils/animations/bubble";

let index = 0;

export const Header = () => {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  for (const route of routes) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = route.path;
    a.append(route.text);
    a.classList.add("bubble", "navlink");

    a.style.borderRadius = bubble();

    const borderRadiusInterval = setInterval(() => {
      a.style.borderRadius = bubble();
    }, 2000);

    a.addEventListener("click", (e) => {
      window.history.pushState("", "", a.href);
      const links = document.querySelectorAll("a.navlink");
      links.forEach((link) => link.classList.add("bubble"));
      e.preventDefault();
      index++;
      a.style.zIndex = 999 + index;
      a.style.borderRadius = 0;
      a.textContent = "";
      a.style.transition = "border-radius 0.6s linear";

      clearInterval(borderRadiusInterval);
      navLinkAnimation(a, () => {
        window.history.pushState("", "", route.path);
        changePreviousRoute(route.path);
        route.page();
        a.style.boxShadow = `inset -6px 6px 10px rgba(0, 0, 0, 0.0),
        inset 2px 6px 10px rgba(0, 0, 0, 0.0),
        inset 20px -20px 22px rgba(255, 255, 255, 0.0),
        inset 40px -40px 44px rgba(0, 0, 0, 0.0)`;
      });
    });

    li.append(a);
    ul.append(li);
  }

  nav.append(ul);
  header.append(nav);
  const app = document.querySelector("#app");
  document.body.insertBefore(header, app);
};
