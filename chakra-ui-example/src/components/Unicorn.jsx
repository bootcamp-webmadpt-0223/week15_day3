// function Unicorn(props) {
//   return (
//     <div style={{ border: "1px solid red", padding: "24px" }}>
//       <p>Name: {props.unicorn.name}</p>
//       <p>Age: {props.unicorn.age}</p>
//     </div>
//   )
// }

import { Button, Card, CardBody, Flex, Text } from "@chakra-ui/react";
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
  const [showMore, setShowMore] = useState(false);
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
      <CardBody>
        {
          isEditing ?
            <form onSubmit={(e) => handleSubmit(e)}>
              <input type="text" name="name" value={data.name} onChange={handleChange} />
              <input type="number" name="age" value={data.age} onChange={handleChange} />

              <button type="submit">Editar</button>
            </form> :
            <>
              <Text as="h4">Name: {name}</Text>
              <Text>Age: {age}</Text>
              <Text noOfLines={showMore ? undefined : 2}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde velit quasi at facilis voluptates repudiandae alias ab, quisquam, commodi rem, sint dolores dolore aspernatur accusamus voluptas voluptatum delectus. Inventore, quasi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aliquam maxime, hic explicabo vitae minima dolores sit quasi ut, eius tempore repellat repudiandae eaque odit fugiat vero laboriosam placeat cupiditate?
              </Text>
            </>
        }
        <Button mt="16px" onClick={() => setShowMore(!showMore)}>Ver más</Button>
        <Flex mt="8px" gap="8px">
          <Button onClick={() => handleDelete(id)}>🗑</Button>
          <Button onClick={() => setIsEditing(!isEditing)}>✏️</Button>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default Unicorn;