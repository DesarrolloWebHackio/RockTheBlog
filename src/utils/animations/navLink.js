import anime from "animejs";

export const navLinkAnimation = (target, complete) => {
  anime({
    targets: target,
    keyframes: [
      {
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        offset: 0,
      },
    ],
    duration: 600,
    easing: "linear",
    complete,
  });
};
