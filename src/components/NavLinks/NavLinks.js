import "./NavLinks.css";
import { routes } from "../../utils/data/routes";
import { navLinkAnimation } from "../../utils/animations/navLink";
import { bubble } from "../../utils/animations/bubble";

let index = 0;

export const NavLinks = (ul) => {
  ul.innerHTML = "";

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
      e.preventDefault();
      const links = document.querySelectorAll("a.navlink");
      links.forEach((link) => link.classList.add("bubble"));
      index++;
      a.style.zIndex = 999 + index;
      a.style.borderRadius = 0;
      a.textContent = "";
      a.style.transition = "border-radius 0.6s linear";
      document.querySelector(".burger_menu").classList.toggle("x");

      clearInterval(borderRadiusInterval);
      navLinkAnimation(a, () => {
        window.history.pushState("", "", route.path);
        route.page();
        a.style.boxShadow = `inset -6px 6px 10px rgba(0, 0, 0, 0.0),
            inset 2px 6px 10px rgba(0, 0, 0, 0.0),
            inset 20px -20px 22px rgba(255, 255, 255, 0.0),
            inset 40px -40px 44px rgba(0, 0, 0, 0.0)`;
        ul.style.display = "none";
        ul.classList.toggle("closed");
        setTimeout(() => {
          ul.style.display = "flex";
          NavLinks(ul);
        }, 500);
      });
    });

    li.append(a);
    ul.append(li);
  }
};
