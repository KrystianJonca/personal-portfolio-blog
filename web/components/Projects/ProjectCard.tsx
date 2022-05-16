import React, { useMemo } from 'react';
import { Project } from '../../typings';
import { urlFor } from '../../lib/sanity';

interface IProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
  const url = useMemo(
    () => urlFor(project.image).width(231).height(130).url(),
    [project]
  );
  return (
    <>
      <a href={project.Link} target="_blank" rel="noreferrer">
        <div className="project">
          <img
            src={url}
            loading="lazy"
            alt={project.name}
            width="231"
            height="130"
            className="project-image"
          />
          <h3 className="project-title">{project.name}</h3>
        </div>
      </a>

      <style jsx>
        {`
          .project {
            margin: 1.5rem 0.5rem;
            cursor: pointer;
            border-radius: 10px;
          }
          .project-image {
            border-radius: 10px;
            opacity: 1;
            transition: all 0.2s ease-in-out;
          }
          .project-image:hover {
            opacity: 0.5;
          }
          .project-title {
            text-align: center;
            font-weight: 400;
            margin: 0.2rem 0;
            font-size: 1.2rem;
          }
        `}
      </style>
    </>
  );
};

export default React.memo(ProjectCard);
