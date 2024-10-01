import { ChangeTheme } from "./src/components/ChangeTheme/ChangeTheme";
import { Header } from "./src/components/Header/Header";
import { routes } from "./src/utils/data/routes";
import "./style.css";
import { Home } from "./src/pages/Home/Home";
import { BurgerMenu } from "./src/components/BurgerMenu/BurgerMenu";
import { searchAndExecutePage } from "./src/utils/functions/searchAndExecutePage";

document.body.append(ChangeTheme(), BurgerMenu());

window.addEventListener("popstate", () => {
  searchAndExecutePage();
});

Header();
Home();

searchAndExecutePage();