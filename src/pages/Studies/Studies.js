import { StudiesCard } from "../../components/StudiesCard/StudiesCard";
import { TimeLine } from "../../components/TimeLine/TimeLine";
import { studies } from "../../utils/data/studies";
import { openPage } from "../../utils/functions/openPage";
import "./Studies.css";

export const Studies = () => {
    const section = openPage("studies", "ESTUDIOS");
    
    section.append(TimeLine(studies, StudiesCard));
}