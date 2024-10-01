import { routes } from "../data/routes";

export const searchAndExecutePage = () => {
  const route = routes.find((route) => route.path === window.location.pathname);
  route.page();
};
