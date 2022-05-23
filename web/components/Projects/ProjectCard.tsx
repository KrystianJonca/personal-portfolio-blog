import React, { useMemo, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Project } from '../../typings';
import { urlFor } from '../../lib/sanity';
import ProjectModal from './ProjectModal';
import { AnimatePresence } from 'framer-motion';

interface IProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const url = useMemo(
    () => urlFor(project.image).width(640).height(360).url(),
    [project]
  );

  const [wrapperElement, setWrapperElement] = useState<any>(null);

  useEffect(() => {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', project.name);
    document.body.appendChild(wrapperElement);
    setWrapperElement(wrapperElement);
  }, [project.name]);

  if (wrapperElement === null) return null;

  return (
    <>
      {createPortal(
        <AnimatePresence
          key={project.name}
          initial={false}
          exitBeforeEnter={true}
        >
          {isOpen && (
            <ProjectModal
              handleClose={handleClose}
              isOpen={isOpen}
              project={project}
              imgUrl={url}
            />
          )}
        </AnimatePresence>,
        wrapperElement
      )}

      <div className="project" onClick={handleOpen}>
        {/* eslint-disable */}
        <img
          src={url}
          alt={project.name}
          loading="lazy"
          className="project-image"
        />

        <h3 className="project-title">{project.name}</h3>
      </div>

      <style jsx global>
        {`
          .project {
            margin: 1.5rem 0.5rem;
            cursor: pointer;
            border-radius: 10px;
            max-width: 231px;
          }
          .project-image {
            border-radius: 10px;
            width: 231px;
            height: 130px;
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
