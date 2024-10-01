import { Experiences } from "../../pages/Experiences/Experiences";
import { Home } from "../../pages/Home/Home";
import { Projects } from "../../pages/Projects/Projects";
import { Studies } from "../../pages/Studies/Studies";

export const routes = [
  {
    text: "Home",
    path: "/",
    page: Home,
    top: "20px",
    left: "50px",
  },
  {
    text: "Proyectos",
    path: "/projects",
    page: Projects,
    top: "200px",
    right: "70px",
  },
  {
    text: "Experiencias",
    path: "/experiences",
    page: Experiences,
    bottom: "100px",
    left: "200px",
  },
  {
    text: "Estudios",
    path: "/studies",
    page: Studies,
    top: "40%",
    left: "30%",
  },
];