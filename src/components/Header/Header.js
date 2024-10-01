import anime from "animejs";
import { routes } from "../../utils/data/routes";
import "./Header.css";
import { navLinkAnimation } from "../../utils/animations/navLink";
import { changePreviousRoute } from "../../../main";
import { bubble } from "../../utils/animations/bubble";

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

    setInterval(() => {
      a.style.borderRadius = bubble();
    }, 2000);

    a.addEventListener("click", (e) => {
      const links = document.querySelectorAll("a.navlink");
      links.forEach((link) => link.classList.add("bubble"));
      a.classList.remove("bubble");
      e.preventDefault();
      navLinkAnimation(a, () => {
        window.history.pushState("", "", route.path);
        changePreviousRoute(route.path);
        route.page();
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
