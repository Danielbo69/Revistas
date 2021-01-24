import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { Button, Form, FormGroup } from 'react-bootstrap';
import Navbar from '../comps/Navbar'

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['application/pdf'];

  const handleChange = (e) => {
    let selected = e.target.files[0];
    console.log(selected)
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select a pdf or an image file (png or jpg)');
    }
  };

  const handleSubmit = ({ e }) => {
    console.log(e)
  }


  return (
    <div>
      <div className="Container" style={{ margin: '30px' }}>
        <label style={{ textAlign: 'center', width: '100%' }}>Upload Magazine</label>
        <Form noValidate className="row forms">
          <Form.Group className="col-md-6" controlId="formBasicNameMagazine">
            <Form.Label>Magazine name</Form.Label>
            <Form.Control type="text" placeholder="Magazine name" />
          </Form.Group>
          <Form.Group className="col-md-6" controlId="formBasicCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" placeholder="Category" />
          </Form.Group>
          <Form.Group className="col-md-12" style={{ marginTop: '30px' }} controlId="formBasicFile">
            <Form.Label style={{ margin: '10px' }}>Upload File</Form.Label>
            <Form.Control type="file" onChange={handleChange} placeholder="UploadFile" />
            {/* <input type="file" onChange={handleChange} /> */}

          </Form.Group>
          <FormGroup className="col-12 botonSubmit" style={{ marginTop: '30px' }}>
            <Button variant="primary" onSubmit={handleSubmit}>
              <div className="output">
                {/*error && <div className="error">{error}</div>}
              {file && <div>{file.name}</div>}
              {file && <ProgressBar file={file} setFile={setFile} />*/}
              </div>
              Submit
      </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default UploadForm;