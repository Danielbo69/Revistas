import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ body, setBody }) => {
  const { progress, url } = useStorage(body);

  useEffect(() => {
    if (url) {
      setBody(null);
    }
  }, [url, setBody]);

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default ProgressBar;