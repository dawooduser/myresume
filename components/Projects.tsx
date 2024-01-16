import type { NextPage } from "next";
import { IProjects, TECHSTACK, projects } from "../typings";
import Github from "../assets/github.webp";
import Web from "../assets/www.webp";
import { useEffect, useState } from "react";

export const Projects: NextPage = () => {
  const [showMore, setShowMore] = useState({ isTrue: false, index: "" });

  return (
    <>
      <h1 className="projects_heading">Professional Projects</h1>
      <div className="projects_filter">
        <div className="projects_filter_cardsBox">
          {projects?.map(project => (
            <div key={project?.id} className="projects_filter_cardsBox_card">
              <img
                src={project.image?.default?.src}
                height={120}
                width={200}
                alt=""
                className="projects_filter_cardsBox_card_img"
              />
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
              <p title={project?.description} className="projects_filter_cardsBox_card_description">
                {showMore.isTrue && showMore?.index === project?.id
                  ? project?.description
                  : project?.description?.slice(0, 50)}
                {project?.description?.length > 50 ? (
                  <p
                    aria-hidden
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => {
                      if (showMore.isTrue && showMore?.index === project?.id) {
                        setShowMore({ isTrue: false, index: "" });
                      } else {
                        setShowMore({ isTrue: true, index: project?.id });
                      }
                    }}
                  >
                    {showMore.isTrue && showMore?.index === project?.id ? "Show less" : "Show more"}
                  </p>
                ) : (
                  ""
                )}
              </p>
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
