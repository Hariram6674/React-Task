// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'

export function Task1() {
  const [inputText, setInputText] = useState('');
  // event handler
  const handleChange = event => {
    setInputText(event.target.value);
  };

  // Function to count words
  const countWords = text => {
    const words = text.trim().split(/\s+/); // Split text by spaces
    return words.length;
  };

  const wordCount = countWords(inputText);

  return (
    <div style={{ height: '7000px'}} >
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="3">
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='h1'>Responsive Word Counter</Form.Label>
                <Form.Control as="textarea" rows={5} value={inputText} onChange={handleChange} />
                <Form.Label>Word Count: </Form.Label><Badge className='mt-3' bg='primary'>{inputText ? wordCount : 0}</Badge>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
