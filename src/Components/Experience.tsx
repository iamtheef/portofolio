import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import chatRoom from "../assets/chat-room.gif";
import graphql from "../assets/graphql.png";
import { LanguageContext } from "../Context/LanguageContext";
import loadable from "@loadable/component";

const Loader = loadable(() => import("../assets/Loader"));
const ProjectCard = loadable(() => import("./ProjectCard"));

interface Project {
  name: string;
  description: string;
  html_url: string;
  language: string;
}

const Experience: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [projects, setProjects] = useState<any>();
  const { isGreek } = useContext(LanguageContext);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/iamtheef/repos?sort=created")
      .then((projects) => {
        setProjects(projects.data);
        setLoaded(true);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

  if (!loaded) return <Loader />;
  return (
    <div className="container marginTop">
      <h3 className="intro">{isGreek() ? "Επιφανή" : "Spotlight"}:</h3>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <img className="card-img" src={graphql} alt="server img" />
            <div className="card-body">
              <h5 className="card-title">GraphQL - TypeScript boilerplate</h5>
              <p className="card-text">
                A fully equiped boilerplate with GraphQL & TypeScript
              </p>
              <a
                href="https://github.com/iamtheef/GraphQL_boilerplate"
                className="btn project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View repository
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <img className="card-img" src={chatRoom} alt="chatRoom gif" />
            <div className="card-body">
              <h5 className="card-title">Chat Room</h5>
              <p className="card-text">
                One-time messaging app with encrypted messages.
              </p>
              <a
                href="https://github.com/iamtheef/chat-room"
                className="btn project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View repository
              </a>
              <a
                href="https://iamtheef-chat-room.herokuapp.com/#/login"
                className="btn project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit App
              </a>
            </div>
          </div>
        </div>
      </div>

      <h3 className="intro mt-5">{isGreek() ? "Τρέχων" : "Current"}:</h3>
      {projects.map((project: Project, i: number) => (
        <div className="row mb-4" key={project.html_url}>
          <div className="col-md">
            <ProjectCard
              title={project.name}
              description={project.description}
              url={project.html_url}
              language={project.language}
              outline={i === 0}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
