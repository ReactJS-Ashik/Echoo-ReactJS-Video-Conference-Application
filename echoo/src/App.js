import { ThemeProvider } from '@mui/material';
import './App.css';
import { CssBaseline, createTheme } from '@mui/material';
import React from 'react'
// Redux Imports
import { useSelector } from 'react-redux';

// My React Components
import Navbar from './Components/Navbar';

// Constants
import { DarkTheme, LightTheme } from './Utils/Constants'

function App() {
  const appName= "Echoo"
  const AppTheme= useSelector((state) => state.system.themeStyle)

  // Define light and dark themes
  const createLightTheme = createTheme({
      palette: {
          mode: LightTheme,
      },
  });

  const createDarkTheme = createTheme({
      palette: {
          mode: DarkTheme,
      },
  });
  return (
    <ThemeProvider theme={AppTheme === LightTheme ? createLightTheme : createDarkTheme}>
      <CssBaseline />
      <div className="App">
        <Navbar appName={appName}/>
        {/* <Navbar appName={appName} checked={checked} setChecked={setChecked} /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
