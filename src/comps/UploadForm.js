import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { Button, Form, FormGroup } from 'react-bootstrap';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['application/pdf'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select a pdf or an image file (png or jpg)');
    }
  };

  const handleSubmit = (e) => {

  }


  return (
    <Form noValidate onSubmit={handleSubmit} className="row">
      <Form.Group className="col-4" controlId="formBasicNameMagazine">
        <Form.Label>Magazine name</Form.Label>
        <Form.Control type="text" placeholder="Magazine name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
          </Form.Text> */}
      </Form.Group>
      <Form.Group className="col-4" controlId="formBasicInformation">
        <Form.Label>Information of magazine</Form.Label>
        <Form.Control type="text" placeholder="Information" />
      </Form.Group>
      <Form.Group className="col-4" controlId="formBasicCompany">
        <Form.Label>Company name</Form.Label>
        <Form.Control type="text" placeholder="Company" />
      </Form.Group>
      <Form.Group className="col-3" controlId="formBasicPages">
        <Form.Label>Pages</Form.Label>
        <Form.Control type="number" placeholder="Pages" />
      </Form.Group>
      <Form.Group className="col-3" controlId="formBasicFile">
        <Form.Label>File</Form.Label>
        <Button type="file" onChange={handleChange} placeholder="UploadFile"></Button>
        {/* <input type="file" onChange={handleChange} /> */}
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </Form.Group>
      <FormGroup className="col-12 botonSubmit">
        <Button variant="primary" type="submit">
          Submit
      </Button>
      </FormGroup>
    </Form>
  );
}

export default UploadForm;