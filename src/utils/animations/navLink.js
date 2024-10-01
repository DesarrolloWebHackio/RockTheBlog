import anime from "animejs";

export const navLinkAnimation = (target, complete) => {
  anime({
    targets: target,
    borderRadius: 0,
    duration: 0,
    easing: "linear",
    complete
  });
};
