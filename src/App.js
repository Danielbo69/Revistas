import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/Home';
import Modal from './comps/Modal';
import Navbar from './comps/Navbar'
import Login from './comps/Login'

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      {/* <Login/> */}

      {<Navbar />}
      { <Title />}
      {     /* <UploadForm />*/
      }      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
