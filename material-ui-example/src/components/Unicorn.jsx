// function Unicorn(props) {
//   return (
//     <div style={{ border: "1px solid red", padding: "24px" }}>
//       <p>Name: {props.unicorn.name}</p>
//       <p>Age: {props.unicorn.age}</p>
//     </div>
//   )
// }

import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useState } from "react";

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
    <Box width="30%">
      <Card>
      <CardContent>
        {
          isEditing ?
            <form onSubmit={(e) => handleSubmit(e)}>
              <input type="text" name="name" value={data.name} onChange={handleChange} />
              <input type="number" name="age" value={data.age} onChange={handleChange} />

              <button type="submit">Editar</button>
            </form> :
            <>
              <Typography variant="h5">Name: {name}</Typography>
              <Typography>Age: {age}</Typography>
            </>
        }
        <CardActions>
          <Button size="small" onClick={() => handleDelete(id)}>🗑</Button>
          <Button size="small" onClick={() => setIsEditing(!isEditing)}>✏️</Button>
        </CardActions>
      </CardContent>
    </Card>
    </Box>
  )
}

export default Unicorn;