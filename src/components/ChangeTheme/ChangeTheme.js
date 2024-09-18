import "./ChangeTheme.css";

export const ChangeTheme = () => {
  const div = document.createElement("div");
  const button = document.createElement("button");

  div.classList.add("change-theme");
  button.addEventListener("click", () => toggleTheme(div));
  
  div.append(button);
  return div;
};

const toggleTheme = (div) => {
  div.classList.toggle("theme-light");

  if (document.body.dataset.theme === "dark") {
    document.body.setAttribute("data-theme", "light");
  } else {
    document.body.setAttribute("data-theme", "dark");
  }
};