import axios from "axios";
import { useEffect, useState } from "react";
import Unicorn from "./Unicorn";
import { Box, Button, FormControl, FormLabel, Grid, Heading, Input } from "@chakra-ui/react";

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
        <Unicorn key={unicorn.id} handleDelete={handleDelete} handleEdit={handleEdit} {...unicorn} />
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
    <>
      <Heading>Unicorns</Heading>
      {/* <form onSubmit={handleSubmit}> */}
      <Box maxW="300px">
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormControl>
            <FormLabel>Name:</FormLabel>
            <Input type="text" name="name" value={name} onChange={handleChange} />
          </FormControl>
          <FormControl mt="12px">
            <FormLabel>Age:</FormLabel>
            <Input type="number" name="age" value={age} onChange={handleChange} />
          </FormControl>

          <Button mt="32px" type="submit">Create</Button>
        </form>
      </Box>
      <Grid marginTop={"32px"} maxW={"90%"} mx="auto" gap="24px" templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
        {
          unicorns.length ? displayUnicorns() : <p>No hay datos</p>
        }
      </Grid>
    </>
  )
}

export default UnicornsList;