import "./Header.css";
import { NavLinks } from "../NavLinks/NavLinks";

export const Header = () => {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  ul.classList.add("closed");

  NavLinks(ul);

  nav.append(ul);
  header.append(nav);
  const app = document.querySelector("#app");
  document.body.insertBefore(header, app);
};
