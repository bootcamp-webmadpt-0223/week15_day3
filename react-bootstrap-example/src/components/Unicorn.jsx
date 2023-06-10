// function Unicorn(props) {
//   return (
//     <div style={{ border: "1px solid red", padding: "24px" }}>
//       <p>Name: {props.unicorn.name}</p>
//       <p>Age: {props.unicorn.age}</p>
//     </div>
//   )
// }

import { useState } from "react";
import { Button, Card, Stack } from "react-bootstrap";

// function Unicorn({ unicorn }) {
//   return (
//     <div style={{ border: "1px solid red", padding: "24px" }}>
//       <p>Name: {unicorn.name}</p>
//       <p>Age: {unicorn.age}</p>
//     </div>
//   )
// }

const API_URL = "http://localhost:3000/unicorns"

function Unicorn({ id, name, age, handleDelete, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    name,
    age
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleEdit(id, data);
    setIsEditing(false);
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  return (

    <Card>
      <Card.Body>
        {
          isEditing ?
            <form onSubmit={(e) => handleSubmit(e)}>
              <input type="text" name="name" value={data.name} onChange={handleChange} />
              <input type="number" name="age" value={data.age} onChange={handleChange} />

              <button type="submit">Editar</button>
            </form> :
            <>
              <Card.Title>Name: {name}</Card.Title>
              <Card.Text>Age: {age}</Card.Text>
            </>
        }
        <Stack as="section" direction="horizontal" gap={3}>
          <Button variant="danger" onClick={() => handleDelete(id)}>🗑</Button>
          <Button onClick={() => setIsEditing(!isEditing)}>✏️</Button>
        </Stack>
      </Card.Body>
    </Card>
  )
}

export default Unicorn;