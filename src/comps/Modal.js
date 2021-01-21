import React from "react";
import { motion } from "framer-motion";

const space = "                            "
const Modal = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <div style={{ justifyContent: 'center' }}>
      <motion.div
        className="backdrop"
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >

        <a
          target="__blank"
          className="image__download"
          href={selectedImg}
          download
        >
          <motion.p style={{ textAlign: 'center', fontSize: "30px" }} initial={{ y: "-3vh" }} animate={{ y: 0 }}>
            {space}  Ver
        </motion.p>
        </a>
      </motion.div>
    </div>
  );
};


export default Modal;