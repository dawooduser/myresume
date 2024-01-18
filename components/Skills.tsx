import type { NextPage } from "next";
import { Skill } from "./Skill";


export const Skills: NextPage = () => {
  return (
    <>
      <h1 className="skills_heading">Tech Skills</h1>
      <div className="skills_box">
        <Skill skill="Languages" />
      </div>
    </>
  );
};
