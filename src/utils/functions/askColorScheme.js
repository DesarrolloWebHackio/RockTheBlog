export const askColorScheme = () => {
    
  if (localStorage.getItem("scheme")) {
    return localStorage.getItem("scheme");
  }

  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  } else {
    return "dark";
  }
};
