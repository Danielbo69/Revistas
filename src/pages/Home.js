import React from 'react';
import { Link } from 'react-router-dom'
import useFirestore from '../hooks/useFirestore';
import Title from '../comps/Title'
import Navbar from '../comps/Navbar'
const space = "                            "

const Home = () => {
  const { docs } = useFirestore('books');
  return (
    <div className="container">
      <Navbar />
      <Link to="/login"><button className="button">Iniciar sesión</button></Link>

      <Title />
      <div className='ContentImg row'>
        {docs && docs.map(doc => (
          <div className="col-md-3" key={doc.id}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Pdf-2127829.png" alt="uploaded pdf"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            <div className='info-grid'>
              <p>informacion de la revista</p>
            </div>
            <div className='row'>
              <div className='col-sm button'>
                <a
                  target="__blank"
                  className="image__download"
                  href={doc.url}
                  download
                >
                  <button>{space} Ver Pdf</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;