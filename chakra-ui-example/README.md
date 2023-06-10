# Chakra UI

## Documentation

- Library documentation: https://chakra-ui.com/

## Getting started

### Installation

```js
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

### Set ChakraProvider at the root of the application
```js
{
  /* The following code can be included in your src/main.js or App.js file */
}
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

```

### Importing components
```js
import { Button, Card, CardBody, Heading, Text } from "@chakra-ui/react";
```