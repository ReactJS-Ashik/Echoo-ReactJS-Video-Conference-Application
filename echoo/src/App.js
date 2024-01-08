import { ThemeProvider } from '@mui/material';
import './App.css';
import Navbar from './Components/Navbar';
import { CssBaseline, createTheme } from '@mui/material';
import React from 'react'

function App() {
  const appName= "Echoo"
  // Later change this to reactive variable
  const [checked, setChecked]= React.useState(true)

  // Define light and dark themes
  const lightTheme = createTheme({
      palette: {
          mode: 'light',
      },
  });

  const darkTheme = createTheme({
      palette: {
          mode: 'dark',
      },
  });
  return (
    <ThemeProvider theme={checked ? lightTheme : darkTheme}>
      <CssBaseline />
      <div className="App">
        <Navbar appName={appName} checked={checked} setChecked={setChecked} />
      </div>
    </ThemeProvider>
  );
}

export default App;
