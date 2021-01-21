import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const space = "                            "

const Home = ({ setSelectedImg, selectedImg }) => {
  const { docs } = useFirestore('bookies');
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  }
  return (
    <div className='row'>
      <div className='col-3'>
        <div className='img-grid'>
          {docs && docs.map(doc => (
            <div className="img-wrap" key={doc.id}
            /*onClick={() => setSelectedImg(doc.url)}*/
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Pdf-2127829.png" alt="uploaded pdf"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
              <div className='info-grid'>
                <p>informacion de la revista</p>
              </div>
              <div className='row'>
                <div className='col-sm-6 button'>
                  <button>Detalles</button>
                </div>
                <div className='col-sm-6 button'>
                  <button onClick={() => setSelectedImg(doc.url)}>Ver Pdf</button>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;