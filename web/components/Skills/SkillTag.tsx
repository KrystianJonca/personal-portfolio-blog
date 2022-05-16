import React from 'react';

interface ISkillTagProps {
  tag: string;
}

const SkillTag: React.FC<ISkillTagProps> = ({ tag }) => {
  return (
    <>
      <span className="skillTag">{tag}</span>
      <style jsx>{`
        .skillTag {
          display: inline-block;
          margin: 0.2rem;
          padding: 0.4rem 0.8rem;
          border-radius: 10px;
          transition: all 0.2s ease-in-out;
          font-size: 0.8rem;
          background-color: rgba(255, 255, 255, 0.2);
        }
        .skillTag:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </>
  );
};

export default SkillTag;
