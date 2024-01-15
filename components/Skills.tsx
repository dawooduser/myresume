import type { NextPage } from "next";
import { ISkills, SKILLSET, dataTech } from "../typings";
import { Skill } from "./Skill";


export const Skills: NextPage = () => {
  console.log({dataTech})

  return (
    <>
      <h1 className="skills_heading">Tech Skills</h1>
      <div className="skills_box">
        <Skill skills={dataTech} skill="Languages" />
      </div>
    </>
  );
};
