import anime from "animejs";
import { bubble } from "./bubble";

export const navLinkAnimationOut = (target, route, complete) => {
  /* target.style.transition = "border-radius 2s linear"; */
  target.style.left = "auto";
  target.style.top = "auto";
  target.textContent = route.text;

  target.style.boxShadow = `inset -6px 6px 10px rgba(0, 0, 0, 0.3),
        inset 2px 6px 10px rgba(0, 0, 0, 0.2),
        inset 20px -20px 22px rgba(255, 255, 255, 0.4),
        inset 40px -40px 44px rgba(0, 0, 0, 0.15)`;

  const animation = {
    targets: target,
    borderRadius: ["0%", bubble()],
    duration: 600,
    height: "150px",
    width: "150px",
    easing: "linear",
    complete,
  };

  route?.top ? (animation.top = route.top) : null;
  route?.bottom ? (animation.bottom = route.bottom) : null;
  route?.left ? (animation.left = route.left) : null;
  route?.right ? (animation.right = route.right) : null;

  anime(animation);
};
