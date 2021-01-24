import React, { useState, useEffect } from 'react';
import useFirestore from '../hooks/useFirestore';
import Title from '../comps/Title'
import Navbar from '../comps/Navbar'
const space = "                            "

const Home = () => {
  const { docs } = useFirestore('books');

  const [docsCopies, setDocsCopies] = useState(null)

  useEffect(() => {

    if (!!docs) {
      setDocsCopies(docs)
    }


  }, [docs])

  for (let x of docs) {
    console.log(x)
  }


  const handleSearch = event => {
    setDocsCopies(docs.filter(valor => valor.magazineName.toLowerCase().includes(event.target.value.toLowerCase()) || valor.category.toLowerCase().includes(event.target.value.toLowerCase()) ))
  }

  return (
    <div>
      <div>
        <Navbar />
        <Title />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }}>
          <input className="searchBar" type="text" placeholder="Busqueda" onChange={handleSearch} />
        </div>
      </div>
      <div className='ContentImg row'>
        {docsCopies && docsCopies.map(doc => (
          <div className="col-md-3" style={{ padding: '10px', textAlign: 'center' }} key={doc.id}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Pdf-2127829.png" alt="uploaded pdf"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            <div className='info-grid'>
              <p> {doc.magazineName}</p>
              <p> {doc.category}</p>
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