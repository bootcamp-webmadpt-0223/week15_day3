import axios from "axios";
import { useEffect, useState } from "react";
import Unicorn from "./Unicorn";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const API_URL = "http://localhost:3000/unicorns"
function UnicornsList() {
  const [unicorns, setUnicorns] = useState([]);
  const [data, setData] = useState({
    name: '',
    age: 0
  });

  const getData = async () => {
    try {
      const response = await axios.get(API_URL);
      setUnicorns(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  const displayUnicorns = () => {
    return (
      unicorns.map(unicorn => (
        // <Unicorn key={unicorn.id} unicorn={unicorn} />
        // <Unicorn key={unicorn.id} name={unicorn.name} age={unicorn.age} />
        <Col style={{ marginTop: 24 }} key={unicorn.id} xs={12} md={6} lg={4}>
          <Unicorn handleDelete={handleDelete} handleEdit={handleEdit} {...unicorn} />
        </Col>
      ))
    )
  }

  const cleanInputs = () => {
    setData({
      name: '',
      age: 0
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, { name, age });
      getData();
      cleanInputs();
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  }

  const handleEdit = async (id, data) => {
    try {
      await axios.put(`${API_URL}/${id}`, data);
      getData();
    } catch (error) {
      console.log(error);
    }
  }


  const { name, age } = data;

  return (
    <Container>
      <h1>Unicorns</h1>
      {/* <form onSubmit={handleSubmit}> */}
      <Form style={{ maxWidth: 300 }} onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={name} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" name="age" value={age} onChange={handleChange} />
        </Form.Group>

        <Button type="submit">Create</Button>
      </Form>
      <Row xs={{  }}>
        {
          unicorns.length ? displayUnicorns() : <p>No hay datos</p>
        }
      </Row>
    </Container>
  )
}

export default UnicornsList;