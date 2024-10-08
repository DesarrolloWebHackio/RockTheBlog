import { Card } from "../../components/Card/Card";
import { TimeLine } from "../../components/TimeLine/TimeLine";
import { experiences } from "../../utils/data/experiences";
import { openPage } from "../../utils/functions/openPage";
import "./Experiences.css";

export const Experiences = () => {
    const section = openPage("experiences", "Experiencias");
    section.append(TimeLine(experiences, Card));
}