import React from 'react';
import { Skill } from '../../typings';
import SkillTag from './SkillTag';

interface ISkillsProps {
  skills: Array<Skill>;
}

const Skills: React.FC<ISkillsProps> = ({ skills }) => {
  return (
    <div>
      {skills.map((skill) => (
        <SkillTag key={skill.tag} tag={skill.tag} />
      ))}
    </div>
  );
};

export default React.memo(Skills);
