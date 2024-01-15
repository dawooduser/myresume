import type { NextPage } from "next";
import { IProjects, TECHSTACK, projects } from "../typings";
import Github from "../assets/github.webp";
import Web from "../assets/www.webp";
import { useEffect, useState } from "react";



export const Projects: NextPage = () => {

  return (
    <>
      <h1 className="projects_heading">Professional Projects</h1>
      <div className="projects_filter">
        <div className="projects_filter_cardsBox">
          {projects?.map(project => (
            <div key={project?.id} className="projects_filter_cardsBox_card">
              <img src={project.image} alt="" className="projects_filter_cardsBox_card_img" />
              <p className="projects_filter_cardsBox_card_title">{project?.title}</p>
              <div className="projects_filter_cardsBox_card_techStack">
                {project?.techStack?.map(stack => {
                  if (stack?.text?.toLowerCase() !== TECHSTACK.ALL) {
                    return (
                      <span key={stack?.text} className="projects_filter_cardsBox_card_techStack_tech">
                        {stack?.text}
                      </span>
                    );
                  }
                })}
              </div>
              <p className="projects_filter_cardsBox_card_description">{project?.description}</p>
              {/* <div className="projects_filter_cardsBox_card_links">
                <img
                  src={Github.src}
                  alt=""
                  onClick={() => window.open(project?.githubLink, "_blank")}
                  className={`${project?.demoLink && "margin-right"}`}
                />
                {project?.demoLink && (
                  <img src={Web.src} alt="" onClick={() => window.open(project?.demoLink, "_blank")} />
                )}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
