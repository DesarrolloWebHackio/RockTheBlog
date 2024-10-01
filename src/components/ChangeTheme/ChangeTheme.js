import { askColorScheme } from "../../utils/functions/askColorScheme";
import "./ChangeTheme.css";

export const ChangeTheme = () => {
  const div = document.createElement("div");
  const button = document.createElement("button");

  div.classList.add("change-theme");

  if (askColorScheme() === "light") {
    div.classList.add("theme-light");
  }

  button.addEventListener("click", () => toggleTheme(div));
  
  div.append(button);
  return div;
};

const toggleTheme = (div) => {
  div.classList.toggle("theme-light");

  if (document.body.dataset.theme === "dark") {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("scheme", "light");
  } else {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("scheme", "dark");
  }
};