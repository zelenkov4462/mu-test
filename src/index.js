import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import "./index.css";
import App from "./components/App";

const theme = createTheme({
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          justifyContent: "space-between",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#61dafb",
    },
    secondary: {
      main: "#da61bf",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
