import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const Home = () => {

  /* <div className="img-grid">
  const { docs } = useFirestore('books');
     {docs && docs.map(doc => (
       <motion.div className="img-wrap" key={doc.id}
         layout
         whileHover={{ opacity: 1 }} s
         onClick={() => setSelectedImg(doc.url)}
       >
         <motion.img src={doc.url} alt="imagen"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1 }} />
       </motion.div>
     ))}
   </div>*/
  return (
    <div className='row'>
      <div className='col-3'>
        <div className='img-grid'>
          <img src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg" />
        </div>
        <div className='info-grid'>
          <p>informacion de la revista</p>
        </div>
        <div className='row'>
          <div className='col-sm-6 button'>
            <button>Ver Detalles</button>
          </div>
          <div className='col-sm-6 button'>
            <button>Ver Pdf</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;