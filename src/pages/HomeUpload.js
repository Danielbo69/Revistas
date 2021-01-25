import React, { useState, useEffect } from 'react';
import useFirestore from '../hooks/useFirestore';
import Title from '../comps/Title'
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
        // console.log(x)
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
        <div>
            <NavbarUp />
            <Title />
            <div className='ContentImg row'>
                <div className="contentpages row">
                    <div className="searchBar">
                        <div className="col-md-3">
                            <input className="form-control" type="text" placeholder="Busqueda" onChange={handleSearch} />
                        </div>
                    </div>
                    {docsCopies && docsCopies.map(doc => (
                        <div className="col-md-3" style={{ padding: '10px', textAlign: 'center' }} key={doc.id}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Pdf-2127829.png" alt="uploaded pdf"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            />
                            <div className='info-grid'>
                                <label className="col-md-12" style={{ textAlign: 'left' }}>Tittle: {doc.magazineName}</label>
                                <label className="col-md-12" style={{ textAlign: 'left' }}>Category: {doc.category}</label>
                            </div>
                            <div className='row' style={{ justifyContent: 'center' }}>
                                <div className='col button' style={{ padding: '0', paddingTop: '10px', marginRight: '1px' }}>
                                    <a
                                        target="__blank"
                                        className="image__download"
                                        href={doc.url}
                                        download
                                    >
                                        <button>{space}See</button>
                                    </a>
                                </div>
                                <div className='col button' style={{ padding: '0', paddingTop: '10px' }}>
                                    <button onClick={() => onDelete(doc.id)}>Eliminar</button>
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