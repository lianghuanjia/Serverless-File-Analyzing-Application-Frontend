// import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import React ,{useState}from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import Box from '@mui/material/Box';
import Uploader from './uploader';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


function App() {
  const [disableUpload,setDisableUpload]=useState(true);
  const login = useGoogleLogin({
      onSuccess: tokenResponse => {
          setDisableUpload(false)
      },
    });
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Box sx={{ 
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh'
             }}>
           
            <Button onClick={login}  style={{visibility: disableUpload? 'visible' : 'hidden' }}>Sign in with google</Button>
            {Uploader(disableUpload)}
        </Box>
      </div>
      </ThemeProvider>

  );
}

export default App;
