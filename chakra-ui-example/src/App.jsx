import { Box } from "@chakra-ui/react";
import "./App.css";
import UnicornsList from "./components/UnicornsList";

function App() {

  return (
    <Box
      as="section"
      marginTop={"24px"}
    >
      <UnicornsList />
    </Box>
  );
}

export default App;
