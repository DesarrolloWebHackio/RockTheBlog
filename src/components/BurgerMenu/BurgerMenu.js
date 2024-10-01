import "./BurgerMenu.css";

export const BurgerMenu = () => {
    const div = document.createElement("div");
    div.classList.add("burger_menu");

    div.addEventListener("click", () => {
        const ul = document.querySelector("body > header ul");
        ul.classList.toggle("closed");  
        div.classList.toggle("x");      
    })

    div.innerHTML = `
        <div class="contrast"></div>
        <div class="contrast"></div>
        <div class="contrast"></div>
    `

    return div;
}