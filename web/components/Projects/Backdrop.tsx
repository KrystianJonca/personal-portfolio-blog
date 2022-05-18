import React from 'react';
import { motion } from 'framer-motion';

interface IBackdropProps {
  handleClose: () => void;
  readonly children: React.ReactNode;
}

const Backdrop: React.FC<IBackdropProps> = ({ children, handleClose }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
      <style jsx global>
        {`
          .backdrop {
            position: fixed;
            top: 0;
            left:0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
          }
        '`}
      </style>
    </motion.div>
  );
};

export default Backdrop;
