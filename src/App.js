import React, { useEffect, useState } from "react";"#0057a9"
import AppRouter from "./routes/Router";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    //"#048740" Santos
    //"#ffffff" Blanco

    //"#0057a9" Azul Tec 1
    //"#13147e" Azul Tec 2
    //"#7b95ad" Azul Light
    primary: {
      main: "#0057a9",
      contrastText: "#000000",
    },
    primaryContainer: {
      main: "#0057a9",
      contrastText: "#0057a9",
    },
    secondary: {
      main: "#0a0a0a",
      contrastText: "#000000",
    },
    secondaryContainer: {
      main: "#0057a9",
      contrastText: "#0057a9",
    },
    tertiary: {
      main: "#fafafa",
      contrastText: "#0057a9",
    },
    tertiaryContainer: {
      main: "#0057a9",
      contrastText: "#0057a9",
    },
    error: {
      main: "#0057a9",
      contrastText: "#0057a9",
    },
    errorContainer: {
      main: "#0057a9",
      contrastText: "#0057a9",
    },
    background: {
      main: "#0057a9",
      contrastText: "#0057a9",
    },
    backgroundContainer: {
      main: "#0057a9",
      contrastText: "#0057a9",
    },
    outline: {
      main: "#0057a9",
      contrastText: "#0057a9",
    },
    outlineContainer: {
      main: "#0057a9",
      contrastText: "#0057a9",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    setInit(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="appA">
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
