import { Experiences } from "../../pages/Experiences/Experiences";
import { Projects } from "../../pages/Projects/Projects";
import { Studies } from "../../pages/Studies/Studies";

export const routes = [
    {
        text: "Proyectos",
        path: "/projects",
        page: Projects
    },
    {
        text: "Experiencias",
        path: "/experiences",
        page: Experiences
    },
    {
        text: "Estudios",
        path: "/studies",
        page: Studies
    },
];