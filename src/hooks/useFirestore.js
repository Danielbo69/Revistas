import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';
import db from '../firebase/config'

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  const deleteData = async id => projectFirestore.collection('books').doc(id).delete()

  return { docs, deleteData };
}

export default useFirestore;