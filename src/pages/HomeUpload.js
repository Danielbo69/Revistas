import React, { useState, useEffect } from 'react';
import useFirestore from '../hooks/useFirestore';
import Title from '../comps/Title'
import UploadForm from '../comps/UploadForm'
import NavbarUp from '../comps/NavbarUp'
const space = "                            "

const Home = () => {
    const { docs, deleteData } = useFirestore('books');

    const [docsCopies, setDocsCopies] = useState(null)

    useEffect(() => {

        if (!!docs) {
            setDocsCopies(docs)
        }


    }, [docs])

    for (let x of docs) {
        console.log(x)
    }

    const onDelete = async (id) => {
        if (window.confirm("Seguro que quiere eliminar este archivo?")) {
            await deleteData(id)
            /* Aqui va un alert en caso de que quieras decir que fue eliminado */
            
        }   
    }


    const handleSearch = event => {
        setDocsCopies(docs.filter(valor => valor.magazineName.toLowerCase().includes(event.target.value.toLowerCase()) || valor.category.toLowerCase().includes(event.target.value.toLowerCase())))
    }


    return (
        <div className="container">
            <NavbarUp />

            <UploadForm />
            <Title />
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }}>
                <input className="searchBar" type="text" placeholder="Busqueda" onChange={handleSearch} />
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
                        <button type="button" className="close" aria-label="Close" onClick={() => onDelete(doc.id)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
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