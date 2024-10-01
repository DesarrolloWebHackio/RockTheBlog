import { ChangeTheme } from "./src/components/ChangeTheme/ChangeTheme";
import { Header } from "./src/components/Header/Header";
import { routes } from "./src/utils/data/routes";
import "./style.css";
import { navLinkAnimationOut } from "./src/utils/animations/navLinkOut";
import { Home } from "./src/pages/Home/Home";

document.body.append(ChangeTheme());

let PREVIOUS_ROUTE = window.location.pathname;

export const changePreviousRoute = (newValue) => {
  console.log(newValue);
  
  PREVIOUS_ROUTE = newValue;
}

window.addEventListener("popstate", () => {
  console.log(PREVIOUS_ROUTE);
  
  const a = document.querySelector(`a[href="${PREVIOUS_ROUTE}"]`);
  navLinkAnimationOut(a, () => {
    routes.find((route) => route.path === window.location.pathname).page();
  });
});

Header();
Home();
