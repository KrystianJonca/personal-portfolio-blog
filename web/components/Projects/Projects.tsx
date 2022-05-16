import React from 'react';
import { Project } from '../../typings';
import ProjectCard from './ProjectCard';

interface IProjectsProps {
  projects: Array<Project>;
}

const Projects: React.FC<IProjectsProps> = ({ projects }) => {
  return (
    <>
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <style jsx>
        {`
          .projects {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            margin: 0 auto;
            flex-wrap: wrap;
          }
          @media only screen and (max-width: 600px) {
            .projects {
              flex-direction: row;
              justify-content: center;
              align-items: center;
            }
          }
        `}
      </style>
    </>
  );
};

export default React.memo(Projects);
