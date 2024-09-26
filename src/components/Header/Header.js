import { routes } from "../../utils/data/routes";
import "./Header.css";

export const Header = () => {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    
    for (const route of routes) {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = route.text;
        a.href = route.path;

        a.addEventListener("click", (e) => {
            e.preventDefault();
            window.history.pushState("", "", route.path);
            route.page();
        });

        li.append(a);
        ul.append(li);
    }

    nav.append(ul);
    header.append(nav);
    const app = document.querySelector("#app");
    document.body.insertBefore(header, app);
}