# Material UI

## Documentation

- Library documentation: https://mui.com/

## Getting started

### Installation

```js
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

### Roboto font and icons - index.html file head
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```


### Set MUI Provider at the root of the application
```js
{
  /* The following code can be included in your src/main.js or App.js file */
}
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

```

### Importing components
```js
import Button from '@mui/material/Button';
```