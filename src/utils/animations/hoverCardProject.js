export const funcionHover = (event, $card) => {
    const $style = document.querySelector(".hover");
  
    //! coordenadas de donde se encuentra el ratón
    let mousePosition = [event.offsetX, event.offsetY];
    event.preventDefault();
    if (event.type === "touchmove") {
      mousePosition = [event.touches[0].clientX, event.touches[0].clientY];
    }
  
    //! posición del ratón respecto a la carta en horizontal y vertical
    let horizontal = mousePosition[0];
    let vertical = mousePosition[1];
  
    //! altura y anchura de la carta
    let cardHeight = $card.clientHeight;
    let cardWidth = $card.clientWidth;
  
    let px = Math.abs(Math.floor((100 / cardWidth) * horizontal));
    let py = Math.abs(Math.floor((100 / cardHeight) * vertical));
  
    let pa = 50 - px + (50 - py);
  
    // math for gradient / background positions
    let lp = 50 + (px - 50) / 1.5;
    let tp = 50 + (py - 50) / 1.5;
    let px_spark = 50 + (px - 50) / 7;
    let py_spark = 50 + (py - 50) / 7;
    let p_opc = 20 + Math.abs(pa) * 1.5;
    let ty = ((tp - 50) / 2) * -1;
    let tx = ((lp - 50) / 1.5) * 0.5;
  
    // css to apply for active card
    let grad_pos = `background-position: ${lp}% ${tp}%;`;
    let sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
    let opc = `opacity: ${p_opc / 100};`;
    let tf = `rotateX(${ty}deg) rotateY(${tx}deg)`;
  
    // need to use a <style> tag for psuedo elements
    let style = `
        .project:hover:before { ${grad_pos} }
        .project:hover:after { ${sprk_pos} ${opc} }
      `;
  
    $card.classList.remove("animated");
    $card.style.transform = tf;
  
  
    $style.innerHTML = style;
  
    if (event.type === "touchmove") {
      return false;
    }
  };
  