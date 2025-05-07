import React from "react";
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
//import globalStyle  from "./commons/styles/global-style";
import Main from "./containers/Main";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline/>
      <Main />
      </StyledEngineProvider>
  );
}

export default App;
