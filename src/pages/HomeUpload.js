import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import Title from '../comps/Title'
import UploadForm from '../comps/UploadForm'
import NavbarUp from '../comps/NavbarUp'
import { Link } from 'react-router-dom';
const space = "                            "

const Home = () => {
    const { docs } = useFirestore('books');

    const [term, setTerm] = useState('')

    const handleSearch = (event) => {
        setTerm(event.target.value)

    }

    const search = (doc) => {
        if (term === "") {
            return doc
        }
        else if (doc.magazineName.toLowerCase().includes(term.toLowerCase())) {
            return doc
        }
    }


    return (
        <div className="container">
            <NavbarUp />

            <Title />
            <div>
                <input className="searchBar" type="text" placeholder="Busqueda" onChange={handleSearch} />
            </div>
            <UploadForm />
            <div className='ContentImg row'>
                {docs && docs.map(doc => (
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