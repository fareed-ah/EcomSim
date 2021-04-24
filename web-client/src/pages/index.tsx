import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import theme from "../theme";
import Home from "./views/home";

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>

  )
}

export default Index
