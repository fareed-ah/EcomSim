import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import theme from "../theme";
import Home from "./views/home";
import 'fontsource-roboto';

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>

  )
}

export default Index
