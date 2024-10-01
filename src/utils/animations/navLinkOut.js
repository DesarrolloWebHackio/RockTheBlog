import anime from "animejs";

export const navLinkAnimationOut = (target, complete) => {
  anime({
    targets: target,
    borderRadius: ["0%", "100%"],
    duration: 0,
    height: "200px",
    width: "200px",
    top: "100px",
    left: "100px",
    easing: "linear",
    complete
  });
};
