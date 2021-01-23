import React from 'react';
import { Link } from 'react-router-dom'
import useFirestore from '../hooks/useFirestore';
import Title from '../comps/Title'
import Navbar from '../comps/Navbar'
const space = "                            "

const Home = () => {
  const { docs } = useFirestore('books');
  for(let x of docs){
    console.log(x)
  } 
  return (
    <div>
      <div>
        <Navbar />
        <Title />
      </div>
      <div className='ContentImg row'>
        {docs && docs.map(doc => (
          <div className="col-md-3" style={{ padding: '10px', textAlign: 'center' }} key={doc.id}>
            <img src={doc.image} alt="uploaded pdf"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            <div className='info-grid'>
              <p>Name: {doc.name}</p>
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