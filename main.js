import { ChangeTheme } from "./src/components/ChangeTheme/ChangeTheme";
import { Header } from "./src/components/Header/Header";
import { routes } from "./src/utils/data/routes";
import "./style.css";

document.body.append(ChangeTheme());

window.addEventListener("popstate", () => {
  routes.find((route) => route.path === window.location.pathname).page();
});

Header();