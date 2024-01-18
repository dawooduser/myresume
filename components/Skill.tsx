import type { NextPage } from "next";
import { ISkills, dataTech } from "../typings";
interface ISkillProps {
  skill: string;
}

export const Skill: NextPage<ISkillProps> = ({ skill }) => {
  return (
    <div className="skills_box_container">
      <p className="skills_box_container_heading">{skill}</p>
      <div className="skills_box_container_row">
        {dataTech?.map((skill) => (
          <div
            key={skill?.id}
            className="skills_box_container_row_card"
          >
            {/* <img src={skill?.image?.url} alt="" /> */}
            <p>{skill?.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
