export const scrollbarHide = () => {
  let segundero = 0;

  window.addEventListener("scroll", () => {
    segundero = 0;
    style.innerHTML = `::-webkit-scrollbar {
    width: 5px;
  }`;
  });

  let style = document.createElement("style");
  document.body.append(style);

  setInterval(() => {
    segundero++;

    if (segundero === 3) {
      style.innerHTML = `::-webkit-scrollbar {
      width: 0px;
    }`;
      segundero = 0;
    }
  }, 1000);
};
