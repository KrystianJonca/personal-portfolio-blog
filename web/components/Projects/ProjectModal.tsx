import React from 'react';
import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
import { Project } from '../../typings';
import Image from 'next/image';
import SkillTag from '../Skills/SkillTag';

interface IProjectModalProps {
  isOpen: boolean;
  imgUrl: string;
  handleClose: () => void;
  project: Project;
}

const variants = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 30,
      stiffness: 500,
    },
  },
  exit: {
    y: '-100vh',
    opacity: 0,
  },
};

const ProjectModal: React.FC<IProjectModalProps> = ({
  project,
  imgUrl,
  handleClose,
}) => {
  return (
    <>
      <Backdrop handleClose={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modal"
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
        >
          <span className="project_modal-image">
            <Image src={imgUrl} alt={project.name} width="640" height="360" />
          </span>
          <h3 className="project_modal-title">{project.name}</h3>
          <p className="project_modal-desc">{project.desc}</p>
          <div className="project_modal-techstack">
            {project.techstack.map(
              (technology) =>
                technology && <SkillTag key={technology} tag={technology} />
            )}
          </div>
        </motion.div>
      </Backdrop>

      <style jsx global>
        {`
          .modal {
            width: clamp(50%, 640px, 90%);
            margin: auto;
            padding: 2rem;
            border-radius: 10px;

            background-color: var(--primary-dark);
            color: var(--primary-light);

            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .project_modal-image img {
            border-radius: 10px;
          }
          .project_modal-title {
            font-weight: 400;
            font-size: 2rem;
            margin: 1rem;
            margin-bottom: 0;
            text-align: center;
          }
          .project_modal-techstack {
            display: flex;
            flex-wrap: wrap;
          }
          @media only screen and (max-width: 600px) {
            .project_modal-title {
              font-size: 1.5rem;
              margin: 1rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default ProjectModal;
