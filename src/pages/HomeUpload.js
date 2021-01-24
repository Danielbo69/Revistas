import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Title from '../comps/Title'
import UploadForm from '../comps/UploadForm'
import NavbarUp from '../comps/NavbarUp'
import { Link } from 'react-router-dom';
const space = "                            "

const Home = () => {
    const { docs } = useFirestore('books');
    return (
        <div className="container">
            <NavbarUp />

            <Title />
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