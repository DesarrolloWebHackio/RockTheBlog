import { ChangeTheme } from "./src/components/ChangeTheme/ChangeTheme";
import { Header } from "./src/components/Header/Header";
import "./style.css";
import { Home } from "./src/pages/Home/Home";
import { BurgerMenu } from "./src/components/BurgerMenu/BurgerMenu";
import { searchAndExecutePage } from "./src/utils/functions/searchAndExecutePage";
import { askColorScheme } from "./src/utils/functions/askColorScheme";

document.body.append(ChangeTheme(), BurgerMenu());
document.body.setAttribute("data-theme", askColorScheme());

window.addEventListener("popstate", () => {
  searchAndExecutePage();
});

Header();
Home();
searchAndExecutePage();